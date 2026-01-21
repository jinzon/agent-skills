<script setup lang="ts">
import { showToast } from 'vant'
import { ref, onMounted } from 'vue'

const onAddWechat = () => {
  showToast('长按识别二维码添加企微')
}

const customerCount = ref(0)
const satisfactionRate = ref(0)

const animateValue = (refVal: any, start: number, end: number, duration: number) => {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    refVal.value = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

onMounted(() => {
  setTimeout(() => {
    animateValue(customerCount, 0, 10, 1500)
    animateValue(satisfactionRate, 0, 99, 1500)
  }, 500)
})
</script>

<template>
  <div class="wechat-card">
    <div class="shimmer-border"></div>
    <div class="wechat-header">
      <div class="wechat-title">
        <div class="icon-bg">
          <van-icon name="wechat" size="22" color="#fff" />
        </div>
        <div class="title-text">
          <div class="main-title">您的专属保险管家</div>
          <div class="sub-title">7x24小时在线服务</div>
        </div>
      </div>
      <div class="tag-wrapper">
        <span class="tag">金牌团队</span>
      </div>
    </div>
    
    <div class="wechat-content">
      <div class="benefit-list">
        <div class="benefit-item">
          <div class="icon-circle"><van-icon name="success" /></div> 极速理赔绿色通道
        </div>
        <div class="benefit-item">
          <div class="icon-circle"><van-icon name="success" /></div> 资深专家保单诊断
        </div>
        <div class="benefit-item">
          <div class="icon-circle"><van-icon name="success" /></div> 节日生日专属福利
        </div>
      </div>
      <div class="qrcode-section">
        <div class="qrcode-placeholder">
          <van-icon name="qr" size="48" color="#333" />
        </div>
        <div class="qrcode-hint">长按识别添加</div>
      </div>
    </div>

    <div class="wechat-footer">
      <div class="achievement">
        <div class="number">{{ customerCount }}W+</div>
        <div class="label">已服务客户</div>
      </div>
      <div class="divider"></div>
      <div class="achievement">
        <div class="number">{{ satisfactionRate }}%</div>
        <div class="label">客户好评率</div>
      </div>
    </div>
    
    <van-button 
      block 
      class="add-btn" 
      @click="onAddWechat"
    >
      立即添加享特权
    </van-button>
  </div>
</template>

<style scoped>
.wechat-card {
  background: rgba(30, 30, 30, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 24px 20px;
  margin-top: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
}

.shimmer-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(45deg, transparent 40%, rgba(255, 215, 0, 0.3) 50%, transparent 60%);
  background-size: 200% 200%;
  animation: shimmer 3s infinite linear;
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

@keyframes shimmer {
  0% { background-position: 100% 100%; }
  100% { background-position: 0% 0%; }
}

.wechat-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
}

.wechat-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-bg {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #07c160 0%, #05a350 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(7, 193, 96, 0.3);
}

.title-text {
  display: flex;
  flex-direction: column;
}

.main-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}

.sub-title {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
}

.tag-wrapper {
  background: linear-gradient(90deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05));
  border: 1px solid rgba(255, 215, 0, 0.3);
  padding: 4px 8px;
  border-radius: 6px;
}

.tag {
  color: #ffd700;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.wechat-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 16px;
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}

.icon-circle {
  width: 16px;
  height: 16px;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #3b82f6;
}

.qrcode-section {
  text-align: center;
  margin-left: 12px;
}

.qrcode-placeholder {
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 6px;
  border: 4px solid #fff;
}

.qrcode-hint {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
}

.wechat-footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 24px;
}

.divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.1);
}

.achievement {
  text-align: center;
}

.number {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(to bottom, #ffd700, #ffaa00);
  -webkit-background-clip: text;
  color: transparent;
  font-family: 'DIN Alternate', 'Roboto Condensed', sans-serif;
  margin-bottom: 4px;
  filter: drop-shadow(0 2px 4px rgba(255, 170, 0, 0.2));
}

.label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
}

.add-btn {
  background: linear-gradient(90deg, #07c160 0%, #05a350 100%);
  border: none;
  color: #fff;
  border-radius: 12px;
  font-weight: 600;
  height: 48px;
  font-size: 16px;
  box-shadow: 0 8px 20px rgba(7, 193, 96, 0.25);
  transition: transform 0.2s;
  position: relative;
  overflow: hidden;
}

.add-btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transform: skewX(-20deg) translateX(-150%);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { transform: skewX(-20deg) translateX(-150%); }
  20% { transform: skewX(-20deg) translateX(150%); }
  100% { transform: skewX(-20deg) translateX(150%); }
}

.add-btn:active {
  transform: scale(0.98);
}
</style>
