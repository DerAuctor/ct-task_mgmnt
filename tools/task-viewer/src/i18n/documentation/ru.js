export const ruDocumentation = {
  releaseNotes: {
    header: '📋 Примечания к релизам',
    versions: 'Версии',
    loading: 'Загрузка примечаний к релизам...',
    notFound: 'Примечания к релизам не найдены.',
    error: 'Ошибка загрузки примечаний к релизам.',
    copy: 'Копировать',
    copied: 'Скопировано!'
  },
  help: {
    header: 'ℹ️ Справка и документация',
    loading: 'Загрузка документации...',
    notFound: 'README не найден.',
    error: 'Ошибка загрузки README.',
    copy: 'Копировать',
    copied: 'Скопировано!'
  },
  // Comprehensive UI strings for all components
  ui: {
    // Navigation and tabs
    navigation: {
      tasks: 'Задачи',
      history: 'История',
      agents: 'Агенты',
      templates: 'Шаблоны',
      settings: 'Настройки',
      help: 'Справка',
      releaseNotes: 'Примечания к релизам'
    },
    
    // Tab management
    tabs: {
      addTab: '+ Добавить вкладку',
      closeTab: 'Закрыть вкладку',
      confirmClose: 'Вы уверены, что хотите закрыть эту вкладку?',
      dragToReorder: 'Перетащите для переупорядочивания'
    },
    
    // Profile management
    profiles: {
      addProfile: 'Добавить профиль',
      profileName: 'Имя профиля',
      taskFolderPath: 'Путь к папке задач',
      projectRoot: 'Корень проекта (необязательно)',
      cancel: 'Отмена',
      save: 'Сохранить',
      edit: 'Изменить',
      delete: 'Удалить',
      rename: 'Переименовать',
      update: 'Обновить',
      addingProfile: 'Добавление профиля...',
      updatingProfile: 'Обновление профиля...',
      enterName: 'Введите название профиля',
      enterPath: 'Введите путь к папке, содержащей tasks.json',
      pathPlaceholder: '/путь/к/папке/данных/shrimp',
      projectRootPlaceholder: '/путь/к/корню/проекта (для кликабельных путей к файлам)',
      nameRequired: 'Требуется название профиля',
      pathRequired: 'Требуется путь к папке'
    },
    
    // Task table
    taskTable: {
      task: 'Задача',
      taskNumber: '№ Задачи',
      status: 'Статус',
      agent: 'Агент',
      created: 'Создано',
      name: 'Название',
      description: 'Описание',
      dependencies: 'Зависимости',
      actions: 'Действия',
      notes: 'Заметки',
      lastModified: 'Последнее изменение',
      priority: 'Приоритет',
      assignee: 'Исполнитель',
      tags: 'Теги',
      
      // Status values
      pending: 'Ожидание',
      inProgress: 'В работе',
      completed: 'Выполнено',
      blocked: 'Заблокировано',
      cancelled: 'Отменено',
      
      // Priority values
      low: 'Низкий',
      medium: 'Средний',
      high: 'Высокий',
      urgent: 'Срочный',
      
      // Actions
      viewDetails: 'Просмотреть детали',
      editTask: 'Редактировать задачу',
      deleteTask: 'Удалить задачу',
      copyTaskId: 'Скопировать ID задачи',
      copyAiInstruction: 'Скопировать ИИ-инструкцию',
      aiInstructionCopied: 'ИИ-инструкция скопирована!',
      taskIdCopied: 'ID задачи скопирован!',
      
      // Table controls
      search: 'Поиск задач...',
      searchPlaceholder: 'Поиск по названию, описанию, статусу или ID...',
      clearSearch: 'Очистить поиск',
      showingResults: 'Показаны {count} из {total} задач',
      noResults: 'Не найдено задач, соответствующих критериям поиска',
      sortBy: 'Сортировать по',
      ascending: 'По возрастанию',
      descending: 'По убыванию',
      
      // Bulk actions
      selectAll: 'Выбрать все',
      selectNone: 'Снять выделение',
      bulkActions: 'Массовые действия',
      selectedTasks: 'выбрано задач: {count}',
      aiAssignAgents: '🤖 ИИ Назначить Агентов',
      bulkEdit: 'Массовое редактирование',
      bulkDelete: 'Массовое удаление',
      confirmBulkDelete: 'Вы уверены, что хотите удалить {count} задач?',
      
      // Pagination
      page: 'Страница',
      of: 'из',
      previous: 'Предыдущая',
      next: 'Следующая',
      first: 'Первая',
      last: 'Последняя',
      rowsPerPage: 'Строк на странице',
      showing: 'Показаны',
      to: 'по',
      entries: 'записей'
    },
    
    // Task details
    taskDetails: {
      taskDetails: 'Детали задачи',
      generalInfo: 'Общая информация',
      description: 'Описание',
      implementation: 'Реализация',
      implementationGuide: 'Руководство по реализации',
      verification: 'Верификация',
      verificationCriteria: 'Критерии верификации',
      relatedFiles: 'Связанные файлы',
      dependencies: 'Зависимости',
      notes: 'Заметки',
      metadata: 'Метаданные',
      
      // Navigation
      previousTask: '← Предыдущая',
      nextTask: 'Следующая →',
      backToList: '← Назад к списку',
      
      // File paths
      filePath: 'Путь к файлу',
      fileType: 'Тип файла',
      lineRange: 'Диапазон строк',
      clickToCopy: 'Нажмите для копирования',
      pathCopied: 'Путь скопирован!',
      
      // File types
      toModify: 'К изменению',
      reference: 'Справочный',
      create: 'К созданию',
      dependency: 'Зависимость',
      other: 'Другой',
      
      // Task actions
      edit: 'Изменить',
      save: 'Сохранить',
      cancel: 'Отмена',
      delete: 'Удалить',
      duplicate: 'Дублировать',
      archive: 'Архивировать',
      restore: 'Восстановить',
      
      // Task status updates
      markPending: 'Отметить как ожидающую',
      markInProgress: 'Отметить как в работе',
      markCompleted: 'Отметить как выполненную',
      markBlocked: 'Отметить как заблокированную',
      
      // Confirmation dialogs
      confirmDelete: 'Вы уверены, что хотите удалить эту задачу?',
      confirmArchive: 'Вы уверены, что хотите архивировать эту задачу?',
      deleteSuccess: 'Задача успешно удалена',
      updateSuccess: 'Задача успешно обновлена',
      
      // Error messages
      loadError: 'Ошибка загрузки деталей задачи',
      saveError: 'Ошибка сохранения задачи',
      deleteError: 'Ошибка удаления задачи'
    },
    
    // Agent management
    agents: {
      agents: 'Агенты',
      agentList: 'Список агентов',
      agentName: 'Имя агента',
      agentType: 'Тип агента',
      agentColor: 'Цвет агента',
      description: 'Описание',
      capabilities: 'Возможности',
      instructions: 'Инструкции',
      aiInstructions: 'ИИ Инструкции',
      
      // Agent actions
      viewAgent: 'Просмотреть агента',
      editAgent: 'Изменить агента',
      deleteAgent: 'Удалить агента',
      createAgent: 'Создать агента',
      duplicateAgent: 'Дублировать агента',
      copyInstructions: 'Скопировать инструкции',
      instructionsCopied: 'Инструкции скопированы!',
      
      // Agent editor
      agentEditor: 'Редактор агентов',
      agentContent: 'Содержимое агента',
      colorPicker: 'Выбор цвета',
      selectColor: 'Выберите цвет для агента',
      preview: 'Предварительный просмотр',
      
      // Agent types
      global: 'Глобальный',
      project: 'Проектный',
      custom: 'Пользовательский',
      builtin: 'Встроенный',
      
      // Agent assignment
      assignAgent: 'Назначить агента',
      unassignAgent: 'Снять назначение агента',
      noAgent: 'Без агента',
      selectAgent: 'Выберите агента...',
      
      // Error messages
      loadError: 'Ошибка загрузки агентов',
      saveError: 'Ошибка сохранения агента',
      deleteError: 'Ошибка удаления агента',
      invalidAgent: 'Неверный формат агента'
    },
    
    // Template management
    templates: {
      templates: 'Шаблоны',
      templateList: 'Список шаблонов',
      templateName: 'Имя шаблона',
      templateType: 'Тип шаблона',
      templateStatus: 'Статус шаблона',
      lastModified: 'Последнее изменение',
      
      // Template types
      default: 'По умолчанию',
      custom: 'Пользовательский',
      customAppend: 'Пользовательский+Дополнение',
      
      // Template actions
      editTemplate: 'Редактировать шаблон',
      duplicateTemplate: 'Дублировать шаблон',
      resetToDefault: 'Сбросить к по умолчанию',
      exportTemplate: 'Экспортировать шаблон',
      importTemplate: 'Импортировать шаблон',
      activateTemplate: 'Активировать шаблон',
      deactivateTemplate: 'Деактивировать шаблон',
      
      // Template editor
      templateEditor: 'Редактор шаблонов',
      templateContent: 'Содержимое шаблона',
      preview: 'Предварительный просмотр',
      syntax: 'Синтаксис',
      variables: 'Переменные',
      
      // Confirmation dialogs
      confirmReset: 'Вы уверены, что хотите сбросить этот шаблон к значению по умолчанию?',
      confirmActivate: 'Вы уверены, что хотите активировать этот шаблон?',
      activationDialog: 'Диалог активации',
      
      // Status messages
      activated: 'Шаблон активирован',
      deactivated: 'Шаблон деактивирован',
      reset: 'Шаблон сброшен к по умолчанию',
      exported: 'Шаблон экспортирован',
      imported: 'Шаблон импортирован',
      
      // Error messages
      loadError: 'Ошибка загрузки шаблонов',
      saveError: 'Ошибка сохранения шаблона',
      exportError: 'Ошибка экспорта шаблона',
      importError: 'Ошибка импорта шаблона'
    },
    
    // Project history
    history: {
      projectHistory: 'История проекта',
      historyEntry: 'Запись истории',
      snapshot: 'Снимок',
      timestamp: 'Временная метка',
      taskCount: 'Количество задач',
      completedTasks: 'Выполненные задачи',
      notes: 'Заметки',
      
      // History actions
      viewSnapshot: 'Просмотреть снимок',
      addNote: 'Добавить заметку',
      editNote: 'Изменить заметку',
      deleteNote: 'Удалить заметку',
      compareSnapshots: 'Сравнить снимки',
      
      // History navigation
      previousSnapshot: '← Предыдущий снимок',
      nextSnapshot: 'Следующий снимок →',
      backToHistory: '← Назад к истории',
      
      // Error messages
      loadError: 'Ошибка загрузки истории проекта',
      saveNoteError: 'Ошибка сохранения заметки',
      deleteNoteError: 'Ошибка удаления заметки',
      noHistory: 'История проекта не найдена'
    },
    
    // Global settings
    settings: {
      globalSettings: 'Глобальные настройки',
      language: 'Язык',
      theme: 'Тема',
      claudeFolderPath: 'Путь к папке Claude',
      openaiApiKey: 'Ключ API OpenAI',
      autoRefresh: 'Автообновление',
      refreshInterval: 'Интервал обновления',
      
      // Language options
      english: 'English',
      chinese: '中文',
      spanish: 'Español',
      russian: 'Русский',
      
      // Theme options
      dark: 'Тёмная',
      light: 'Светлая',
      system: 'Системная',
      
      // Settings actions
      save: 'Сохранить настройки',
      reset: 'Сбросить к по умолчанию',
      export: 'Экспортировать настройки',
      import: 'Импортировать настройки',
      
      // API key status
      configured: '✓ Настроено',
      notConfigured: '✗ Не настроено',
      apiKeyHidden: 'Ключ API скрыт из соображений безопасности',
      enterApiKey: 'Введите ваш ключ API OpenAI',
      
      // Refresh intervals
      fiveSeconds: '5 секунд',
      tenSeconds: '10 секунд',
      fifteenSeconds: '15 секунд',
      thirtySeconds: '30 секунд',
      oneMinute: '1 минута',
      twoMinutes: '2 минуты',
      fiveMinutes: '5 минут',
      
      // Status messages
      settingsSaved: 'Настройки сохранены',
      settingsReset: 'Настройки сброшены',
      settingsExported: 'Настройки экспортированы',
      settingsImported: 'Настройки импортированы',
      
      // Error messages
      saveError: 'Ошибка сохранения настроек',
      loadError: 'Ошибка загрузки настроек',
      exportError: 'Ошибка экспорта настроек',
      importError: 'Ошибка импорта настроек'
    },
    
    // Common UI elements
    common: {
      loading: 'Загрузка...',
      error: 'Ошибка',
      success: 'Успех',
      warning: 'Предупреждение',
      info: 'Информация',
      
      // Buttons
      ok: 'ОК',
      cancel: 'Отмена',
      save: 'Сохранить',
      delete: 'Удалить',
      edit: 'Изменить',
      add: 'Добавить',
      remove: 'Удалить',
      close: 'Закрыть',
      open: 'Открыть',
      view: 'Просмотреть',
      copy: 'Копировать',
      paste: 'Вставить',
      cut: 'Вырезать',
      undo: 'Отменить',
      redo: 'Повторить',
      search: 'Поиск',
      filter: 'Фильтр',
      sort: 'Сортировать',
      refresh: 'Обновить',
      
      // States
      enabled: 'Включено',
      disabled: 'Отключено',
      active: 'Активно',
      inactive: 'Неактивно',
      visible: 'Видимо',
      hidden: 'Скрыто',
      
      // Time and dates
      today: 'Сегодня',
      yesterday: 'Вчера',
      tomorrow: 'Завтра',
      thisWeek: 'На этой неделе',
      lastWeek: 'На прошлой неделе',
      thisMonth: 'В этом месяце',
      lastMonth: 'В прошлом месяце',
      
      // File operations
      upload: 'Загрузить',
      download: 'Скачать',
      import: 'Импорт',
      export: 'Экспорт',
      
      // Confirmation
      confirm: 'Подтвердить',
      confirmAction: 'Вы уверены, что хотите выполнить это действие?',
      confirmDelete: 'Вы уверены, что хотите удалить этот элемент?',
      
      // Status messages
      operationSuccessful: 'Операция выполнена успешно',
      operationFailed: 'Операция не удалась',
      itemSaved: 'Элемент сохранён',
      itemDeleted: 'Элемент удалён',
      itemUpdated: 'Элемент обновлён',
      itemCreated: 'Элемент создан',
      
      // Error messages
      genericError: 'Произошла ошибка. Пожалуйста, попробуйте ещё раз.',
      networkError: 'Ошибка сети. Проверьте подключение к интернету.',
      serverError: 'Ошибка сервера. Попробуйте позже.',
      notFound: 'Элемент не найден',
      accessDenied: 'Доступ запрещён',
      validationError: 'Ошибка проверки данных',
      
      // Data states
      noData: 'Нет данных',
      emptyList: 'Список пуст',
      noResults: 'Результаты не найдены',
      loadingData: 'Загрузка данных...',
      
      // Navigation
      home: 'Главная',
      back: 'Назад',
      forward: 'Вперёд',
      up: 'Вверх',
      down: 'Вниз',
      left: 'Влево',
      right: 'Вправо',
      
      // Form validation
      required: 'Обязательное поле',
      invalidFormat: 'Неверный формат',
      tooShort: 'Слишком короткий',
      tooLong: 'Слишком длинный',
      invalidEmail: 'Неверный email адрес',
      invalidUrl: 'Неверный URL',
      
      // Size and quantity
      small: 'Маленький',
      medium: 'Средний',
      large: 'Большой',
      none: 'Нет',
      few: 'Несколько',
      many: 'Много',
      all: 'Все'
    },
    
    // Statistics and dashboard
    stats: {
      totalTasks: 'Всего задач',
      completedTasks: 'Выполнено задач',
      inProgressTasks: 'Задач в работе',
      pendingTasks: 'Задач в ожидании',
      blockedTasks: 'Заблокированных задач',
      tasksByStatus: 'Задачи по статусу',
      tasksByPriority: 'Задачи по приоритету',
      tasksByAgent: 'Задачи по агентам',
      recentActivity: 'Недавняя активность',
      productivity: 'Продуктивность',
      completionRate: 'Процент завершения',
      averageCompletionTime: 'Среднее время завершения',
      overdueTasks: 'Просроченные задачи'
    }
  }
};