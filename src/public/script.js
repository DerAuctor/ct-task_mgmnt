// 全局變量
// Global variables
let tasks = [];
let selectedTaskId = null;
let searchTerm = "";
let sortOption = "date-asc";
let globalAnalysisResult = null; // 新增：儲存全局分析結果
                                   // New: Store global analysis result
let svg, g, simulation;
let width, height; // << 新增：將寬高定義為全局變量
                   // << New: Define width and height as global variables
let isGraphInitialized = false; // << 新增：追蹤圖表是否已初始化
                                 // << New: Track whether the chart has been initialized
let zoom; // << 新增：保存縮放行為對象
          // << New: Save zoom behavior object

// 新增：i18n 全局變量
// New: i18n global variables
let currentLang = "en"; // 預設語言
                           // Default language
let translations = {}; // 儲存加載的翻譯
                       // Store loaded translations

// DOM元素
// DOM elements
const taskListElement = document.getElementById("task-list");
const taskDetailsContent = document.getElementById("task-details-content");
const statusFilter = document.getElementById("status-filter");
const currentTimeElement = document.getElementById("current-time");
const progressIndicator = document.getElementById("progress-indicator");
const progressCompleted = document.getElementById("progress-completed");
const progressInProgress = document.getElementById("progress-in-progress");
const progressPending = document.getElementById("progress-pending");
const progressLabels = document.getElementById("progress-labels");
const dependencyGraphElement = document.getElementById("dependency-graph");
const globalAnalysisResultElement = document.getElementById(
  "global-analysis-result"
); // 假設 HTML 中有這個元素
// Assuming this element exists in HTML
const langSwitcher = document.getElementById("lang-switcher"); // << 新增：獲取切換器元素
                                                                   // << New: Get switcher element
const resetViewBtn = document.getElementById("reset-view-btn"); // << 新增：獲取重置按鈕元素
                                                                   // << New: Get reset button element

// LLM Provider Configuration
const LLM_PROVIDERS = [
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', default: true },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro' },
  { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash' },
  { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro' },
  { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash' }
];

// DOM ready event
document.addEventListener("DOMContentLoaded", function() {
  // fetchTasks(); // 將由 initI18n() 觸發
  // fetchTasks(); // Will be triggered by initI18n()
  initI18n(); // << 新增：初始化 i18n
              // << New: Initialize i18n
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
  updateDimensions(); // << 新增：初始化時更新尺寸
                      // << New: Update dimensions during initialization

  // 事件監聽器
  // Event listeners
  // statusFilter.addEventListener("change", renderTasks); // 將由 changeLanguage 觸發或在 applyTranslations 後觸發
  // statusFilter.addEventListener("change", renderTasks); // Will be triggered by changeLanguage or after applyTranslations
  if (statusFilter) {
    statusFilter.addEventListener("change", renderTasks);
  }

  // 新增：重置視圖按鈕事件監聽
  // New: Reset view button event listener
  if (resetViewBtn) {
    resetViewBtn.addEventListener("click", resetView);
  }

  // 新增：搜索和排序事件監聽
  // New: Search and sorting event listeners
  const searchInput = document.getElementById("search-input");
  const sortOptions = document.getElementById("sort-options");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.toLowerCase();
      renderTasks();
    });
  }

  if (sortOptions) {
    sortOptions.addEventListener("change", (e) => {
      sortOption = e.target.value;
      renderTasks();
    });
  }

  // 新增：設置 SSE 連接
  // New: Setup SSE connection
  setupSSE();

  // 新增：語言切換器事件監聽
  // New: Language switcher event listener
  if (langSwitcher) {
    langSwitcher.addEventListener("change", (e) =>
      changeLanguage(e.target.value)
    );
  }

  // 新增：視窗大小改變時更新尺寸
  // New: Update dimensions when window size changes
  window.addEventListener("resize", () => {
    updateDimensions();
    if (svg && simulation) {
      svg.attr("viewBox", [0, 0, width, height]);
      simulation.force("center", d3.forceCenter(width / 2, height / 2));
      simulation.alpha(0.3).restart();
    }
  });
});