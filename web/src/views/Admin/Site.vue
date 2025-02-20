<template>
  <div class="site-config">
    <OptionsConfigure :forms="configForms" />
  </div>
</template>
<script setup lang="ts">
import {
  DEFAULT_AUDIO_FILE_EXTS,
  DEFAULT_IMAGE_FILE_EXTS,
  DEFAULT_TEXT_FILE_EXTS,
  DEFAULT_VIDEO_FILE_EXTS,
  DEFAULT_EXTERNAL_FILE_PREVIEWERS,
} from '@/config'
import { useI18n } from 'vue-i18n'
import OptionsConfigure, { OptionsForm } from './OptionsConfigure.vue'

const { t } = useI18n()

const configForms: OptionsForm[] = [
  {
    title: t('p.admin.site.site_settings'),
    form: [
      { field: 'app.name', label: t('p.admin.site.app_name'), type: 'text' },
      {
        field: 'app.styles',
        label: t('p.admin.site.global_styles'),
        type: 'code',
        code: { type: 'css', typeSelectable: false, height: '300px' },
        width: '100%',
      },
      {
        field: 'app.scripts',
        label: t('p.admin.site.inject_scripts'),
        type: 'code',
        code: { type: 'javascript', typeSelectable: false, height: '300px' },
        width: '100%',
      },
    ],
  },
  {
    title: t('p.admin.site.file_preview_config'),
    form: [
      {
        field: 'web.textFileExts',
        label: t('p.admin.site.text_file_exts'),
        description: t('p.admin.site.text_file_exts_desc'),
        type: 'textarea',
        defaultValue: DEFAULT_TEXT_FILE_EXTS,
        fillDefaultIfEmpty: true,
      },
      {
        field: 'web.imageFileExts',
        label: t('p.admin.site.image_file_exts'),
        description: t('p.admin.site.image_file_exts_desc'),
        type: 'textarea',
        defaultValue: DEFAULT_IMAGE_FILE_EXTS,
        fillDefaultIfEmpty: true,
      },
      {
        field: 'web.audioFileExts',
        label: t('p.admin.site.audio_file_exts'),
        description: t('p.admin.site.audio_file_exts_desc'),
        type: 'textarea',
        defaultValue: DEFAULT_AUDIO_FILE_EXTS,
        fillDefaultIfEmpty: true,
      },
      {
        field: 'web.videoFileExts',
        label: t('p.admin.site.video_file_exts'),
        description: t('p.admin.site.video_file_exts_desc'),
        type: 'textarea',
        defaultValue: DEFAULT_VIDEO_FILE_EXTS,
        fillDefaultIfEmpty: true,
      },
      {
        field: 'web.monacoEditorExts',
        label: t('p.admin.site.monaco_editor_exts'),
        description: t('p.admin.site.monaco_editor_exts_desc'),
        type: 'textarea',
      },
      {
        field: 'web.externalFileViewers',
        label: t('p.admin.site.external_file_viewers'),
        description: t('p.admin.site.external_file_viewers_desc'),
        type: 'textarea',
        defaultValue: DEFAULT_EXTERNAL_FILE_PREVIEWERS,
        fillDefaultIfEmpty: true,
        width: '100%',
      },
    ],
  },
  {
    title: t('p.admin.site.anonymous_root_path'),
    form: [
      {
        field: 'anonymous.rootPath',
        description: t('p.admin.site.anonymous_root_path_desc'),
        type: 'text',
      },
    ],
  },
  {
    title: t('p.admin.site.download_options'),
    form: [
      {
        label: t('p.admin.site.proxy_max'),
        field: 'proxy.maxSize',
        description: t('p.admin.site.proxy_max_desc'),
        type: 'text',
      },
      {
        label: t('p.admin.site.zip_max_size'),
        field: 'zip.maxSize',
        description: t('p.admin.site.zip_max_size_desc'),
        type: 'text',
      },
    ],
  },
  {
    title: t('p.admin.site.thumbnail_config'),
    form: [
      {
        field: 'thumbnail.handlersMapping',
        label: t('p.admin.site.thumbnail_mapping'),
        description: t('p.admin.site.thumbnail_mapping_tips'),
        placeholder: t('p.admin.site.thumbnail_mapping_placeholder'),
        type: 'textarea',
        width: '100%',
        validate: (v: string) =>
          !v ||
          !v
            .split('\n')
            .filter(Boolean)
            .some(
              (f) => !/^([A-Za-z0-9-_]+(,[A-Za-z0-9-_]+)*):(.+)$/.test(f)
            ) ||
          t('p.admin.site.thumbnail_mapping_invalid'),
      },
    ],
  },
]
</script>
<style lang="scss">
.site-config {
  padding: 16px;
}
</style>
