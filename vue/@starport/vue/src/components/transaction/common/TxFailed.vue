<template>
    <div class="warning-icon">
        <svg
          width="58"
          height="54"
          viewBox="0 0 58 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29 44.5625C29.7249 44.5625 30.3125 43.9749 30.3125 43.25C30.3125 42.5251 29.7249 41.9375 29 41.9375C28.2751 41.9375 27.6875 42.5251 27.6875 43.25C27.6875 43.9749 28.2751 44.5625 29 44.5625Z"
            fill="#FE475F"
          />
          <path
            d="M1.4375 52.4375L29 1.25L56.5625 52.4375H1.4375Z"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29 19.625V34.0625"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29 44.5625C29.7249 44.5625 30.3125 43.9749 30.3125 43.25C30.3125 42.5251 29.7249 41.9375 29 41.9375C28.2751 41.9375 27.6875 42.5251 27.6875 43.25C27.6875 43.9749 28.2751 44.5625 29 44.5625Z"
            stroke="#FE475F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div style="width: 100%; height: 24px" />

      <div class="tx-feedback-title">Something went wrong</div>

      <div style="width: 100%; height: 16px" />

      <div class="tx-feedback-subtitle">
        {{failed_message}}
      </div>

      <div style="width: 100%; height: 24px" />
</template>
<script>
export default {
    name: "TxFailed",
    props: ["failed_message"]
}
</script>