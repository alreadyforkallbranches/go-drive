package drive

import (
	"context"
	"go-drive/common/drive_util"
	err "go-drive/common/errors"
	"go-drive/common/i18n"
	"go-drive/common/types"
	"go-drive/common/utils"
	"go-drive/storage"
	"net/http"
)

type PathMetaWrapper struct {
	types.IDrive
	pathMeta *storage.PathMetaDAO

	session types.Session
}

func NewPathMetaWrapper(root types.IDrive, pathMeta *storage.PathMetaDAO,
	session types.Session) *PathMetaWrapper {
	return &PathMetaWrapper{IDrive: root, pathMeta: pathMeta, session: session}
}

// Get injects pathMeta into Entry's props
func (pm *PathMetaWrapper) Get(ctx context.Context, path string) (types.IEntry, error) {
	entry, e := pm.IDrive.Get(ctx, path)
	if e != nil {
		return nil, e
	}
	meta, e := pm.getPathMeta(path)
	if e != nil {
		return nil, e
	}
	if meta == nil {
		return entry, nil
	}
	return drive_util.WrapEntryWithMeta(entry, types.M{"pathMeta": *meta}), nil
}

// List checks if the path has a password set and validates it
func (pm *PathMetaWrapper) List(ctx context.Context, path string) ([]types.IEntry, error) {
	if pm.session.IsAnonymous() {
		meta, e := pm.getPathMeta(path)
		if e != nil {
			return nil, e
		}
		if meta != nil && meta.Password.V != "" {
			pwd := pm.session.Props["password:"+meta.Password.Path]
			if pwd != meta.Password.V {
				return nil, errIncorrectPassword
			}
		}
	}
	return pm.List(ctx, path)
}

func (pm *PathMetaWrapper) getPathMeta(path string) (*types.MergedPathMeta, error) {
	meta, e := pm.pathMeta.Gets(path)
	if e != nil {
		return nil, e
	}
	return utils.MergePathMeta(path, meta), nil
}

var errIncorrectPassword = incorrectPasswordError{}

type incorrectPasswordError struct{}

func (incorrectPasswordError) Code() int {
	return http.StatusPaymentRequired
}

func (incorrectPasswordError) Error() string {
	return i18n.T("drive.path_meta.incorrect_password")
}

func (incorrectPasswordError) Name() string {
	return "INCORRECT_PASSWORD"
}

var _ err.Error = errIncorrectPassword
