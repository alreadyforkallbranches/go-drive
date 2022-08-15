export default {
  admin: {
    oauth_connected: '已连接到 {p}',
    t_site: '站点',
    t_users: '用户',
    t_groups: '用户组',
    t_drives: '盘',
    t_misc: '其他',
    save: '保存',
    site: {
      app_name: '站点标题',
    },
    drive: {
      reload_drives: '重新加载盘',
      reload_tip: '编辑配置后，重新加载才可生效',
      name: '名称',
      type: '类型',
      operation: '操作',
      edit: '编辑',
      delete: '删除',
      add_drive: '添加盘',
      edit_drive: '编辑 {n}',
      save: '保存',
      cancel: '取消',
      configure: '配置',
      start_configure: '配置',
      configured: '已配置',
      not_configured: '尚未配置',
      add: '添加',
      or_edit: ' 或编辑盘',
      f_name: '名称',
      f_enabled: '已启用',
      f_type: '类型',
      delete_drive: '删除盘',
      confirm_delete: '确认删除 {n}？',
      reload_tips: '你所做的更改只有在重新加载盘后才会生效',
    },
    user: {
      username: '用户名',
      operation: '操作',
      add_user: '添加用户',
      edit: '编辑',
      delete: '删除',
      edit_user: '编辑 {n}',
      groups: '所属组',
      save: '保存',
      cancel: '取消',
      add: '添加',
      or_edit: ' 或编辑用户',
      f_username: '用户名',
      f_password: '密码',
      f_rootPath: '根目录',
      f_rootPath_desc: '限制用户只能访问这个目录下的资源，路径不以 / 开头',
      delete_user: '删除用户',
      confirm_delete: '确认删除 {n}？',
    },
    group: {
      name: '名称',
      operation: '操作',
      add_group: '添加组',
      edit: '编辑',
      delete: '删除',
      edit_group: '编辑 {n}',
      users: '包含用户',
      save: '保存',
      cancel: '取消',
      add: '添加',
      or_edit: ' 或编辑组',
      f_name: '名称',
      delete_group: '删除组',
      confirm_delete: '确认删除 {n}？',
    },
    misc: {
      permission_of_root: '根路径权限',
      anonymous_root_path: '匿名用户根路径',
      anonymous_root_path_desc:
        '限制未登录的用户只能访问这个目录下的资源，路径不以 / 开头',
      office_preview_enabled: 'Office 预览',
      office_preview_enabled_desc:
        '通过微软和谷歌提供的在线服务来预览 Office 文件',
      text_file_exts: '文本文件后缀名',
      text_file_exts_desc: '支持查看和编辑的文本文件后缀名列表，用英文逗号隔开',
      image_file_exts: '图片文件后缀名',
      image_file_exts_desc: '支持查看的图片文件后缀名列表，用英文逗号隔开',
      media_file_exts: '媒体文件后缀名',
      media_file_exts_desc: '支持查看的媒体文件后缀名列表，用英文逗号隔开',
      file_preview_config: '文件预览配置',
      thumbnail_config: '缩略图配置',
      thumbnail_mapping: '缩略图生成器映射',
      thumbnail_mapping_tips:
        '配置某个路径中生成缩略图所使用的生成器 tag，每行一个规则。\n格式为: tag1,tag2:路径匹配规则\n其中，挂载路径和 chroot 路径将会被解析为绝对路径来进行匹配\n\n** 匹配零个或多个目录；\n* 匹配任意个数的非目录分隔符字符;\n? 匹配单个非目录分隔符字符。',
      thumbnail_mapping_placeholder: '例如: a,b:Pictures/**/*.jpg',
      thumbnail_mapping_invalid: '无效的映射规则',
      proxy_max: '最大代理大小',
      proxy_max_desc:
        '最大允许通过代理下载的文件大小，可使用 b, k, m, g, t 单位',
      clean: '清除',
      clean_invalid: '清理无效的权限项/挂载项',
      clean_cache: '清除缓存',
      statistics: '统计信息',
      refresh_in: '{n} 秒后刷新',
      invalid_path_cleaned: '已清理 {n} 个无效的路径',
      search_index: '文件索引',
      search_disabled: '搜索功能未开启',
      search_form_filter: '过滤器',
      search_form_filter_desc:
        '每行一个过滤器，以 + 开始的行表示包含，已 - 开始的行表示排除。 或者留空将包含所有文件。\n\n** 匹配零个或多个目录；\n* 匹配任意个数的非目录分隔符字符;\n? 匹配单个非目录分隔符字符。',
      search_form_filter_placeholder:
        '例如：\n-**/node_modules/**\n+**/*.jpg\n+**/*.png',
      search_form_filter_invalid: '无效的过滤规则',
      search_form_path: '路径',
      search_form_path_desc: '留空将索引所有文件',
      search_submit_index: '开始索引',
      search_th_path: '路径',
      search_th_status: '状态',
      search_th_created_at: '开始于',
      search_th_updated_at: '更新于',
      search_th_ops: '操作',
      search_index_stop: '停止',
      search_op_index: '索引',
      search_op_delete: '删除',
    },
    p_edit: {
      subject: '主体',
      rw: '(读/写)',
      policy: '策略',
      any: '任何',
      reject: '拒绝',
      accept: '接受',
    },
  },
  task: {
    empty: '现在没有任务',
    start: '开始',
    pause: '暂停',
    stop: '停止',
    remove: '移除',

    s_created: '已创建',
    s_starting: '开始',
    s_paused: '已暂停',
    s_stopped: '已停止',
    s_error: '错误',
    s_completed: '已完成',
  },
  home: {
    readme_loading: '加载 README...',
    readme_failed: '加载 README 失败',
    unsaved_confirm: '尚未保存，确认离开？',
  },
  new_entry: {
    new_item: '新建',
    create_file: '创建空文件',
    upload_file: '上传文件',
    create_folder: '创建文件夹',
    upload_tasks: '上传任务',
    tasks_status: '上传 {p}',
    drop_tip: '拖放到这里以上传',
    invalid_filename: '无效的文件名',
    invalid_folder_name: '无效的文件夹名称',
    confirm_stop_task: '确认停止该任务？',
    confirm_remove_task: '确认移除该任务，不可恢复？',
    resolve_file: '{n} 个文件/文件夹...',
    override_confirm: '已存在时是否覆盖？',
    upload_clipboard: '上传来自剪贴板的文件？',
  },
  login: {
    username: '用户名',
    password: '密码',
    login: '登录',
  },
}
