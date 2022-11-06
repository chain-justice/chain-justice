<template>
    <div class="check-icon">
        <svg
          width="64"
          height="63"
          viewBox="0 0 64 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="32"
            cy="31.5"
            r="29.5"
            stroke="#00CF30"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M19 30.1362L28.6557 40L45 23"
            stroke="#00CF30"
            stroke-width="4"
          />
        </svg>
      </div>

      <div style="width: 100%; height: 24px" />

      <div class="tx-feedback-title">{{success_message}}</div>

      <div style="width: 100%; height: 8px" />
</template>
<script>
export default {
    name: "TxSuccess",
    props: ["success_message"]
}
</script>