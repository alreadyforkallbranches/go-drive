// Code generated by Wire. DO NOT EDIT.

//go:generate go run github.com/google/wire/cmd/wire
//go:build !wireinject
// +build !wireinject

package main

import (
	"context"
	"github.com/gin-gonic/gin"
	"go-drive/common"
	"go-drive/common/event"
	"go-drive/common/i18n"
	"go-drive/common/registry"
	"go-drive/common/task"
	"go-drive/common/utils"
	"go-drive/drive"
	"go-drive/server"
	"go-drive/server/scheduled"
	"go-drive/server/search"
	"go-drive/server/thumbnail"
	"go-drive/storage"
)

// Injectors from wire.go:

func Initialize(ctx context.Context, ch *registry.ComponentsHolder) (*gin.Engine, error) {
	config, err := common.InitConfig(ch)
	if err != nil {
		return nil, err
	}
	bus := event.NewBus(ch)
	db, err := storage.NewDB(config, ch)
	if err != nil {
		return nil, err
	}
	driveDAO := storage.NewDriveDAO(db, ch)
	pathMountDAO := storage.NewPathMountDAO(db, ch)
	driveDataDAO := storage.NewDriveDataDAO(db, ch)
	driveCacheDAO := storage.NewDriveCacheDAO(db, ch)
	rootDrive, err := drive.NewRootDrive(ctx, config, driveDAO, pathMountDAO, driveDataDAO, driveCacheDAO, ch)
	if err != nil {
		return nil, err
	}
	pathPermissionDAO := storage.NewPathPermissionDAO(db, ch)
	optionsDAO := storage.NewOptionsDAO(db, ch)
	access, err := drive.NewAccess(ch, rootDrive, pathPermissionDAO, optionsDAO, bus)
	if err != nil {
		return nil, err
	}
	tunnyRunner := task.NewTunnyRunner(config, ch)
	service, err := search.NewService(ch, config, optionsDAO, rootDrive, tunnyRunner, bus)
	if err != nil {
		return nil, err
	}
	fileTokenStore, err := server.NewFileTokenStore(config, ch)
	if err != nil {
		return nil, err
	}
	maker, err := thumbnail.NewMaker(config, optionsDAO, ch)
	if err != nil {
		return nil, err
	}
	signer := utils.NewSigner()
	chunkUploader, err := server.NewChunkUploader(config)
	if err != nil {
		return nil, err
	}
	userDAO := storage.NewUserDAO(db, ch)
	groupDAO := storage.NewGroupDAO(db, ch)
	scheduledDAO := storage.NewScheduledDAO(db, ch)
	jobExecutor, err := scheduled.NewJobExecutor(scheduledDAO, ch)
	if err != nil {
		return nil, err
	}
	fileMessageSource, err := i18n.NewFileMessageSource(config)
	if err != nil {
		return nil, err
	}
	engine, err := server.InitServer(config, ch, bus, rootDrive, access, service, fileTokenStore, maker, signer, chunkUploader, tunnyRunner, optionsDAO, userDAO, groupDAO, driveDAO, driveCacheDAO, driveDataDAO, pathPermissionDAO, pathMountDAO, scheduledDAO, jobExecutor, fileMessageSource)
	if err != nil {
		return nil, err
	}
	return engine, nil
}
