export const translations = {
  // Header
  appTitle: "🦐 Shrimp Task Manager Viewer",
  version: "เวอร์ชัน",
  releaseNotes: "บันทึกการเปิดตัว",
  help: "ช่วยเหลือ",
  language: "ภาษา",
  
  // Navigation tabs
  tasks: "งาน",
  templates: "เทมเพลต",
  projects: "โครงการ",
  
  // Template Management
  templateManagement: "🎨 การจัดการเทมเพลต",
  templateManagementDesc: "จัดการเทมเพลตพรอมต์สำหรับฟีเจอร์ตัวจัดการงานทั้งหมด แก้ไข ทำสำเนา หรือรีเซ็ตเทมเพลตเพื่อปรับแต่งพฤติกรรม AI",
  exportTemplates: "📤 ส่งออกเทมเพลต",
  exportTemplatesDesc: "ส่งออกการกำหนดค่าเทมเพลตเพื่อแชร์กับทีมหรือสำรองไว้ใช้ในภายหลัง",
  
  // Template columns
  function: "ฟังก์ชัน",
  description: "รายละเอียด",
  status: "สถานะ",
  actions: "การดำเนินการ",
  
  // Template statuses
  statusDefault: "ค่าเริ่มต้น",
  statusCustom: "กำหนดเอง",
  statusCustomAppend: "กำหนดเอง+เพิ่ม",
  
  // Template actions
  edit: "แก้ไข",
  editTemplate: "✏️ แก้ไขเทมเพลต",
  preview: "ดูตัวอย่าง",
  previewTemplate: "ดูตัวอย่าง: {name}",
  duplicate: "ทำสำเนา",
  duplicateTemplate: "📋 ทำสำเนาเทมเพลต",
  activate: "เปิดใช้งาน",
  activateTemplate: "🚀 เปิดใช้งานเทมเพลต",
  reset: "รีเซ็ต",
  resetToDefault: "รีเซ็ตเป็นเทมเพลตเริ่มต้น",
  
  // Common actions
  save: "บันทึก",
  cancel: "ยกเลิก",
  back: "กลับ",
  backToTemplates: "← กลับไปยังเทมเพลต",
  close: "ปิด",
  
  // Duplicate Template View
  whyDuplicate: "📚 เหตุใดจึงต้องทำสำเนาเทมเพลต?",
  duplicateExplanation: "การทำสำเนาเทมเพลตช่วยให้คุณสร้างเวอร์ชันเฉพาะของเทมเพลตที่มีอยู่สำหรับการใช้งานที่แตกต่างกัน:",
  createVariations: "🎯 สร้างรูปแบบที่หลากหลาย",
  createVariationsDesc: "สร้างเวอร์ชันเฉพาะสำหรับบริบทต่างๆ:",
  safeExperimentation: "🧪 การทดลองอย่างปลอดภัย",
  safeExperimentationDesc: "ทดสอบการเปลี่ยนแปลงโดยไม่กระทบต่อเทมเพลตการทำงาน:",
  templateLibraries: "📂 ไลบรารีเทมเพลต",
  templateLibrariesDesc: "สร้างคอลเลกชันของเทมเพลตที่เกี่ยวข้อง:",
  versionManagement: "💾 การจัดการเวอร์ชัน",
  versionManagementDesc: "เก็บเวอร์ชันต่างๆ สำหรับความต้องการที่แตกต่างกัน:",
  
  // Duplicate form
  createDuplicate: "📝 สร้างสำเนา",
  originalTemplate: "เทมเพลตต้นฉบับ",
  newTemplateName: "ชื่อเทมเพลตใหม่",
  required: "*",
  nameHint: "เลือกชื่อที่สื่อความหมายซึ่งระบุจุดประสงค์หรือรูปแบบของสำเนานี้",
  whatWillHappen: "📋 สิ่งที่จะเกิดขึ้น:",
  createNewTemplate: "สร้างเทมเพลตใหม่",
  copyContent: "คัดลอกเนื้อหา",
  independentEditing: "แก้ไขแบบอิสระ",
  readyToUse: "พร้อมใช้งาน",
  
  // Export Templates
  exportTemplateConfigurations: "ส่งออกการกำหนดค่าเทมเพลต",
  exportFormat: "รูปแบบการส่งออก:",
  exportOnlyModified: "ส่งออกเฉพาะเทมเพลตที่แก้ไข (แนะนำ)",
  exportHint: "เมื่อเลือก จะส่งออกเฉพาะเทมเพลตที่กำหนดเองหรือเขียนทับเท่านั้น",
  
  // Activation Dialog
  whatIsEnvVar: "📋 ตัวแปรสภาพแวดล้อมคืออะไร?",
  envVarExplanation: "ตัวแปรสภาพแวดล้อมคือการตั้งค่าที่โปรแกรมสามารถอ่านได้เมื่อเริ่มต้น เซิร์ฟเวอร์ MCP จะตรวจสอบตัวแปรเทมเพลตกำหนดเองเพื่อเขียนทับพรอมต์เริ่มต้น การตั้งค่า {envVar} จะบอก MCP server ให้ใช้เทมเพลตที่แก้ไขแล้วแทนที่จะใช้เทมเพลตที่มีอยู่ในตัว",
  whyNeedThis: "เหตุใดจึงต้องการสิ่งนี้?",
  whyNeedThisExplanation: "เมื่อ Claude เริ่มต้น MCP server จะอ่านตัวแปรสภาพแวดล้อมเหล่านี้เพื่อปรับแต่งวิธีการตอบสนอง หากไม่ได้ตั้งค่าตัวแปรนี้ การแก้ไขเทมเพลตจะไม่ถูกใช้งาน",
  howToSetVariable: "🚀 วิธีการตั้งค่าตัวแปรนี้",
  chooseCommand: "เลือกคำสั่งที่เหมาะสมด้านล่างตามการตั้งค่าของคุณ คำสั่งเหล่านี้จะส่งออกตัวแปรไปยังไฟล์การกำหนดค่าเชลล์ (เช่น ~/.bashrc หรือ ~/.zshrc) เพื่อให้ Claude สามารถใช้เมื่อเริ่มต้น",
  
  // Messages
  loading: "กำลังโหลด...",
  error: "ข้อผิดพลาด",
  success: "สำเร็จ",
  noTemplatesFound: "ไม่พบเทมเพลต",
  failedToLoad: "โหลดไม่สำเร็จ",
  
  // Pagination
  showing: "แสดง",
  to: "ถึง",
  of: "ของ",
  page: "หน้า",
  filteredFrom: "ที่กรองจาก",
  total: "ทั้งหมด",
  
  // Statistics
  totalTemplates: "เทมเพลตทั้งหมด",
  totalNumberOfTemplates: "จำนวนเทมเพลตทั้งหมด",
  numberOfDefaultTemplates: "จำนวนเทมเพลตเริ่มต้น",
  numberOfCustomTemplates: "จำนวนเทมเพลตกำหนดเอง",
  numberOfEnvOverrideTemplates: "จำนวนเทมเพลตเขียนทับสภาพแวดล้อม",
  default: "เริ่มต้น",
  custom: "กำหนดเอง", 
  envOverride: "เขียนทับสภาพแวดล้อม",
  
  // Project management
  readme: "อ่านฉัน",
  addTab: "เพิ่มโครงการ",
  history: "ประวัติ",
  viewProjectHistory: "ดูประวัติโครงการ",
  totalTasks: "งานทั้งหมด",
  completed: "เสร็จสิ้น",
  inProgress: "กำลังดำเนินการ",
  pending: "รอดำเนินการ",
  autoRefresh: "รีเฟรชอัตโนมัติ",
  
  // History management
  backToTasks: "กลับไปยังงาน",
  backToHistory: "กลับไปยังประวัติ",
  projectHistory: "ประวัติโครงการ",
  dateTime: "วันที่/เวลา",
  taskCount: "จำนวนงาน",
  notes: "หมายเหตุ",
  statusSummary: "สรุปสถานะ",
  viewTasks: "ดูงาน",
  noHistoryFound: "ไม่พบประวัติ",
  noHistoryDescription: "ไม่มีสแนปช็อตงานในอดีตสำหรับโครงการนี้",
  historyRowTitle: "รายการประวัติ - คลิก 'ดูงาน' เพื่อดูรายละเอียด",
  historyEntries: "รายการประวัติ",
  tasksFrom: "งานจาก",
  taskName: "ชื่องาน",
  noDependencies: "ไม่มี",
  created: "สร้างแล้ว",
  noTasksFound: "ไม่พบงาน",
  noTasksMessage: "ยังไม่ได้สร้างไฟล์ tasks.json เพื่อสร้างงาน ให้รัน shrimp ในโฟลเดอร์นี้",
  noTasksInHistory: "สแนปช็อตประวัตินี้ไม่มีงาน",
  taskRowTitle: "รายละเอียดงานจากสแนปช็อตประวัติ",
  
  // Search and UI
  searchTemplatesPlaceholder: "🔍 ค้นหาเทมเพลต...",
  searchTemplatesTitle: "ค้นหาและกรองเทมเพลตตามชื่อฟังก์ชันหรือรายละเอียด",
  refreshTemplateData: "รีเฟรชข้อมูลเทมเพลต",
  searchTasksPlaceholder: "🔍 ค้นหางาน...",
  searchTasksTitle: "ค้นหาและกรองงานตามเนื้อหาข้อความใดๆ",
  refreshCurrentProfile: "รีเฟรชข้อมูลโครงการปัจจุบัน - โหลดงานจากไฟล์ใหม่",
  
  // Project management
  editProjectSettings: "แก้ไขการตั้งค่าโครงการ",
  chooseProfileTitle: "เลือกโครงการจากดรอปดาวน์ด้านบน",
  selectProfileToViewTasks: "เลือกโครงการเพื่อดูงาน",
  noProfilesAvailable: "ไม่มีโครงการใช้งานได้",
  noProfilesClickAddTab: "ไม่มีโครงการใช้งานได้ คลิก \"เพิ่มโครงการ\" เพื่อสร้างโครงการ",
  loadingTasksFromFile: "กำลังโหลดงานจากไฟล์",
  loadingTasks: "กำลังโหลดงาน... ⏳",
  
  // Add/Edit Project forms
  addNewProfile: "เพิ่มโครงการใหม่",
  profileName: "ชื่อโครงการ",
  profileNamePlaceholder: "เช่น: งานทีม Alpha",
  profileNameTitle: "ป้อนชื่อที่สื่อความหมายสำหรับโครงการนี้",
  taskFolderPath: "เส้นทางโฟลเดอร์งาน",
  taskFolderPathPlaceholder: "/path/to/shrimp_data_folder",
  taskFolderPathTitle: "ป้อนเส้นทางไปยังโฟลเดอร์ข้อมูล shrimp ที่มี tasks.json",
  tip: "เคล็ดลับ",
  navigateToFolder: "ไปยังโฟลเดอร์ข้อมูล shrimp ในเทอร์มินัลแล้ว",
  typePwd: "พิมพ์ pwd เพื่อรับเส้นทางเต็ม",
  example: "ตัวอย่าง",
  projectRootPath: "เส้นทางรูทโครงการ",
  projectRootPlaceholder: "เช่น: /home/user/my-project",
  projectRootTitle: "ป้อนเส้นทางสัมบูรณ์ไปยังไดเรกทอรีรูทโครงการ",
  projectRootHint: "สิ่งนี้จะเปิดใช้งานลิงก์ไฟล์ที่คลิกได้ที่เปิดใน VS Code",
  optional: "ทางเลือก",
  addProfile: "เพิ่มโครงการ",
  cancelAndCloseDialog: "ยกเลิกและปิดกล่องโต้ตอบนี้",
  addProject: "เพิ่มโครงการ",
  
  // Edit Project specific
  projectRoot: "รูทโครงการ",
  taskPath: "เส้นทางงาน",
  editProfileNameTitle: "แก้ไขชื่อโครงการ",
  projectRootEditPlaceholder: "เช่น: /home/user/projects/my-project",
  projectRootEditTitle: "ตั้งค่าเส้นทางรูทโครงการเพื่อเปิดใช้งานลิงก์ไฟล์ VS Code",
  projectRootEditHint: "ตั้งค่านี้เพื่อเปิดใช้งานลิงก์ VS Code ที่คลิกได้สำหรับไฟล์งาน",
  taskPathPlaceholder: "/path/to/shrimp_data_folder/tasks.json",
  taskPathTitle: "แก้ไขเส้นทางไปยังไฟล์ tasks.json สำหรับโครงการนี้",
  taskPathHint: "เส้นทางไปยังไฟล์ tasks.json ที่มีข้อมูลงานของโครงการ",
  saveChanges: "บันทึกการเปลี่ยนแปลง",
  
  // Toast messages with parameters
  profileAddedSuccess: "เพิ่มโครงการ \"{name}\" สำเร็จแล้ว!",
  profileRemovedSuccess: "ลบโครงการ \"{name}\" สำเร็จแล้ว!",
  templateSavedSuccess: "บันทึกเทมเพลต \"{name}\" สำเร็จแล้ว!",
  templateResetSuccess: "รีเซ็ตเทมเพลต \"{name}\" เป็นค่าเริ่มต้นแล้ว!",
  templateDuplicatedSuccess: "ทำสำเนาเทมเพลตเป็น \"{name}\" แล้ว!",
  rememberToRestartClaude: "💡 อย่าลืมรีสตาร์ท Claude Code หลังจากตั้งค่าตัวแปรสภาพแวดล้อม",
  
  // Confirmation dialogs
  confirmRemoveProfile: "คุณแน่ใจหรือไม่ที่จะลบโครงการนี้? การดำเนินการนี้ไม่สามารถยกเลิกได้",
  confirmResetTemplate: "คุณแน่ใจหรือไม่ที่จะรีเซ็ต {name} เป็นค่าเริ่มต้น? การปรับแต่งทั้งหมดจะถูกลบ",
  
  // Template activation
  defaultTemplateAlreadyActive: "เทมเพลตเริ่มต้นเปิดใช้งานอยู่แล้ว - ไม่ต้องเปิดใช้งาน",
  
  // Duplicate Template View additional keys
  noTemplateSelected: "ไม่ได้เลือกเทมเพลต",
  pleaseEnterDuplicateName: "กรุณาป้อนชื่อสำหรับเทมเพลตสำเนา",
  duplicateNameMustBeDifferent: "ชื่อสำเนาต้องแตกต่างจากชื่อต้นฉบับ",
  failedToDuplicateTemplate: "ทำสำเนาเทมเพลตไม่สำเร็จ",
  backToTemplateList: "กลับไปยังรายการเทมเพลต",
  creatingDuplicate: "กำลังสร้างสำเนา...",
  
  // Task Table
  task: "งาน",
  taskName: "ชื่องาน",
  created: "สร้างแล้ว",
  updated: "อัปเดตแล้ว",
  dependencies: "การพึ่งพา",
  noTasksFound: "ไม่พบงานในโครงการนี้",
  noDescriptionProvided: "ไม่ได้ให้รายละเอียด",
  viewTask: "ดูงาน",
  clickToCopyUuid: "คลิกเพื่อคัดลอก UUID ไปยังคลิปบอร์ด",
  copyTaskInstruction: "คัดลอกต่อไปนี้ไปยังคลิปบอร์ด: ใช้ตัวจัดการงานเพื่อทำงาน shrimp นี้ให้เสร็จ",
  useTaskManager: "ใช้ตัวจัดการงานเพื่อทำงาน shrimp นี้ให้เสร็จ",
  clickToViewTaskDetails: "คลิกเพื่อดูรายละเอียดงาน",
  
  // Template Editor
  saving: "กำลังบันทึก...",
  saveTemplate: "บันทึกเทมเพลต",
  
  // Project Settings
  projectSettings: "การตั้งค่าโครงการ",
  settingsSaved: "บันทึกการตั้งค่าสำเร็จแล้ว",
  settings: "การตั้งค่า",
  
  // Global Settings
  globalSettings: "การตั้งค่าส่วนกลาง",
  claudeFolderPath: "เส้นทางโฟลเดอร์ Claude",
  claudeFolderPathDesc: "การระบุเส้นทางโฟลเดอร์ Claude จะช่วยให้เข้าถึงการตั้งค่าซับเอเจนต์และฮุค",
  claudeFolderPathPlaceholder: "เช่น: ~/.config/claude",
  
  // Task messages
  taskSavedSuccess: "บันทึกงานสำเร็จแล้ว",
  confirmDeleteTask: "คุณแน่ใจหรือไม่ที่จะลบงานนี้?",
  taskDeletedSuccess: "ลบงานสำเร็จแล้ว",
  deleteTask: "ลบงาน",
  
  // Agent functionality
  subAgents: "ซับเอเจนต์",
  agents: "เอเจนต์", 
  agentName: "ชื่อเอเจนต์",
  type: "ประเภท",
  viewAgent: "ดูเอเจนต์",
  editAgent: "แก้ไขเอเจนต์",
  noAgentsFound: "ไม่พบเอเจนต์",
  agentSavedSuccess: "บันทึกเอเจนต์สำเร็จแล้ว",
  aiInstruction: "คำสั่ง AI"
};