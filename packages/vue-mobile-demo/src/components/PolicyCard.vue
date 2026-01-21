<script setup lang="ts">
import { showToast } from 'vant'

defineProps<{
  policy: {
    id: number
    name: string
    expireDate: string
    amount: string
  }
}>()

const onRenewClick = (name: string) => {
  showToast(`跳转续保: ${name}`)
}
</script>

<template>
  <div class="policy-card" @click="onRenewClick(policy.name)">
    <div class="glass-highlight"></div>
    <div class="policy-info">
      <div class="policy-name">{{ policy.name }}</div>
      <div class="policy-countdown">
        <span class="dot"></span> 剩余 24 天到期
      </div>
    </div>
    <div class="policy-action">
      <div class="amount-wrapper">
        <span class="currency">¥</span>
        <span class="amount">{{ policy.amount }}</span>
      </div>
      <van-button 
        size="small" 
        round 
        class="renew-btn"
        color="linear-gradient(135deg, #ff6034 0%, #ee0a24 100%)"
      >
        立即续保
      </van-button>
    </div>
  </div>
</template>

<style scoped>
.policy-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.glass-highlight {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
  opacity: 0.5;
}

.policy-card:active {
  transform: scale(0.98);
  background: rgba(255, 255, 255, 0.06);
}

.policy-info {
  flex: 1;
  padding-right: 12px;
}

.policy-name {
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 8px;
  letter-spacing: 0.3px;
}

.policy-countdown {
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  color: #ff9f43;
  background: rgba(255, 159, 67, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 500;
}

.dot {
  width: 6px;
  height: 6px;
  background-color: #ff9f43;
  border-radius: 50%;
  margin-right: 6px;
  animation: blink 2s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.policy-action {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.amount-wrapper {
  display: flex;
  align-items: baseline;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.amount {
  font-size: 24px;
  font-weight: 700;
  font-family: 'DIN Alternate', 'Roboto Condensed', sans-serif;
  letter-spacing: 0.5px;
  line-height: 1;
}

.currency {
  font-size: 14px;
  margin-right: 4px;
  font-weight: 500;
  opacity: 0.8;
}

.renew-btn {
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(238, 10, 36, 0.4);
  padding: 0 20px;
  height: 34px;
  font-size: 13px;
  border: none;
}
</style>
