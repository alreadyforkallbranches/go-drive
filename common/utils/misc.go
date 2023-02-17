package utils

import (
	"go-drive/common/types"
)

func MergePathMeta(path string, items []*types.PathMeta) *types.MergedPathMeta {
	if len(items) == 0 {
		return nil
	}
	r := types.MergedPathMeta{}
	for _, item := range items {
		same := *item.Path == path
		if r.Password.V == "" && (same || (item.Recursive&(1<<0)) != 0) {
			r.Password.V = item.Password
			r.Password.Path = *item.Path
		}
		if r.DefaultSort.V == "" && (same || (item.Recursive&(1<<1)) != 0) {
			r.DefaultSort.V = item.DefaultSort
			r.DefaultSort.Path = *item.Path
		}
		if r.DefaultMode.V == "" && (same || (item.Recursive&(1<<2)) != 0) {
			r.DefaultMode.V = item.DefaultMode
			r.DefaultMode.Path = *item.Path
		}
		if r.HiddenPattern.V == "" && (same || (item.Recursive&(1<<3)) != 0) {
			r.HiddenPattern.V = item.HiddenPattern
			r.HiddenPattern.Path = *item.Path
		}
	}
	return &r
}
