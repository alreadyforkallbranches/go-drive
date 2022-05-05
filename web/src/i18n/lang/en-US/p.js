export default {
  admin: {
    oauth_connected: 'Already connected to {p}',
    t_site: 'Site',
    t_users: 'Users',
    t_groups: 'Groups',
    t_drives: 'Drives',
    t_misc: 'Misc',
    site: {
      app_name: 'Site Title',
      proxy_max: 'Max Proxy Size',
      proxy_max_desc:
        'Maximum allowed file size for downloading via proxy. Units: b, k, m, g, t',
      save: 'Save',
    },
    drive: {
      reload_drives: 'Reload drives',
      reload_tip: 'Reload drives to take effect',
      name: 'Name',
      type: 'Type',
      operation: 'Operation',
      edit: 'Edit',
      delete: 'Delete',
      add_drive: 'Add drive',
      edit_drive: 'Edit drive: {n}',
      save: 'Save',
      start_configure: 'Configure',
      cancel: 'Cancel',
      configure: 'Configure',
      configured: 'Configured',
      not_configured: 'Not configured',
      add: 'Add',
      or_edit: ' or edit drive',
      f_name: 'Name',
      f_enabled: 'Enabled',
      f_type: 'Type',
      delete_drive: 'Delete drive',
      confirm_delete: 'Are you sure to delete drive {n}?',
      reload_tips: 'You need to reload drives to take effect',
    },
    user: {
      username: 'Username',
      operation: 'Operation',
      add_user: 'Add user',
      edit: 'Edit',
      delete: 'Delete',
      edit_user: 'Edit user {n}',
      groups: 'Groups',
      save: 'Save',
      cancel: 'Cancel',
      add: 'Add',
      or_edit: ' or edit user',
      f_username: 'Username',
      f_password: 'Password',
      delete_user: 'Delete user',
      confirm_delete: 'Are you sure to delete user {n}?',
    },
    group: {
      name: 'Name',
      operation: 'Operation',
      add_group: 'Add group',
      edit: 'Edit',
      delete: 'Delete',
      edit_group: 'Edit group {n}',
      users: 'Users',
      save: 'Save',
      cancel: 'Cancel',
      add: 'Add',
      or_edit: ' or edit group',
      f_name: 'Name',
      delete_group: 'Delete group',
      confirm_delete: 'Are you sure to delete group {n}?',
    },
    misc: {
      permission_of_root: 'Permission of root',
      thumbnail_config: 'Thumbnail config',
      thumbnail_mapping: 'Thumbnail Generator Mapping',
      thumbnail_mapping_tips:
        'Configure the tag used to match thumbnails generator in a path, one rule per line. The format is: tag1,tag2:path-pattern\nThe mounted path and chrooted path will be resolved to an absolute path for matching\n\n** matches zero or more directories;\n* matches any sequence of non-path-separators;\n? matches any single non-path-separator character.',
      thumbnail_mapping_placeholder: 'Example: a,b:Pictures/**/*.jpg',
      thumbnail_mapping_invalid: 'Invalid mapping pattern',
      save: 'Save',
      clean: 'Clean',
      clean_invalid: 'Clean Invalid Permissions and Mounts',
      clean_cache: 'Clean Cache',
      statistics: 'Statistics',
      refresh_in: 'Refresh in {n}s',
      invalid_path_cleaned: '{n} invalid paths cleaned',
      search_index: 'Files Index',
      search_disabled: 'Search is not enabled',
      search_form_filter: 'Filters',
      search_form_filter_desc:
        'Filters line by line, line starts with + for including, line starts with - for excluding. Or leave blank to include all files.\n** matches zero or more directories;\n* matches any sequence of non-path-separators;\n? matches any single non-path-separator character.',
      search_form_filter_placeholder:
        'Examples:\n-**/node_modules/**\n+**/*.jpg\n+**/*.png',
      search_form_filter_invalid: 'Invalid filters',
      search_form_path: 'Path',
      search_form_path_desc: 'Leave blank to index all files',
      search_submit_index: 'Index now',
      search_th_path: 'Path',
      search_th_status: 'Status',
      search_th_created_at: 'Started At',
      search_th_updated_at: 'Updated At',
      search_th_ops: 'Operations',
      search_index_stop: 'Stop',
      search_op_index: 'Index',
      search_op_delete: 'Delete',
    },
    p_edit: {
      subject: 'Subject',
      rw: '(R/W)',
      policy: 'Policy',
      any: 'ANY',
      reject: 'Reject',
      accept: 'Accept',
    },
  },
  task: {
    empty: 'Nothing here',
    start: 'Start',
    pause: 'Pause',
    stop: 'Stop',
    remove: 'Remove',

    s_created: 'Created',
    s_starting: 'Starting',
    s_paused: 'Paused',
    s_stopped: 'Stopped',
    s_error: 'Error',
    s_completed: 'Completed',
  },
  home: {
    file_exists: "'{n}' already exists, override or skip?",
    apply_all: 'Apply for all',
    readme_loading: 'Loading README...',
    readme_failed: 'Failed to load README.',
    unsaved_confirm: 'You have some unsaved changes, are you sure to leave?',
  },
  new_entry: {
    new_item: 'New item',
    create_file: 'Create empty file',
    upload_file: 'Upload file',
    create_folder: 'Create folder',
    upload_tasks: 'Upload Tasks',
    tasks_status: 'Tasks {p}',
    drop_tip: 'Drop files here to upload',
    invalid_filename: 'Invalid filename',
    invalid_folder_name: 'Invalid folder name',
    confirm_stop_task: 'Stop this task?',
    confirm_remove_task: 'Remove this task, cannot be undone?',
    file_exists: 'File exists',
    skip: 'Skip',
    override: 'Override',
  },
  login: {
    username: 'Username',
    password: 'Password',
    login: 'Login',
  },
}
