<script setup lang="ts">
import { ref } from 'vue'
import PolicyCard from '../components/PolicyCard.vue'
import WechatCard from '../components/WechatCard.vue'

const pendingPolicies = ref([
  { id: 1, name: '车辆保险', expireDate: '2026-02-15', amount: '3,200.00' },
  { id: 2, name: '家庭财产险', expireDate: '2026-03-01', amount: '580.00' }
])
</script>

<template>
  <div class="page-container">
    <div class="ambient-light"></div>
    <div class="aurora-glow"></div>
    
    <!-- 头部艺术字问候 -->
    <div class="header-section fade-in-up" style="animation-delay: 0.1s">
      <div class="success-icon-wrapper">
        <van-icon name="checked" size="48" color="#39FF14" class="success-icon" />
      </div>
      <h1 class="art-text">续保成功</h1>
      <p class="sub-text">您的保障已生效，请关注以下待办事项</p>
    </div>

    <!-- 剩余待续保单 -->
    <div class="section-title fade-in-up" style="animation-delay: 0.2s">待续保保单 ({{ pendingPolicies.length }})</div>
    <div class="policy-list">
      <PolicyCard 
        v-for="(policy, index) in pendingPolicies" 
        :key="policy.id" 
        :policy="policy" 
        class="fade-in-up"
        :style="{ animationDelay: `${0.3 + index * 0.1}s` }"
      />
    </div>

    <!-- 企微引流卡片 -->
    <WechatCard class="fade-in-up" style="animation-delay: 0.5s" />
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100vh;
  background-color: #050505;
  padding: 20px 12px;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

.ambient-light {
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 96, 52, 0.12) 0%, rgba(5, 5, 5, 0) 70%);
  pointer-events: none;
  z-index: 0;
}

.aurora-glow {
  position: absolute;
  top: 10%;
  right: -20%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(5, 5, 5, 0) 70%);
  filter: blur(40px);
  pointer-events: none;
  z-index: 0;
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

.header-section {
  text-align: center;
  margin-bottom: 30px;
  padding-top: 20px;
  position: relative;
  z-index: 1;
}

.success-icon-wrapper {
  margin-bottom: 12px;
  display: inline-block;
  padding: 12px;
  background: rgba(57, 255, 20, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.2);
  animation: pulse 2s infinite;
}

.success-icon {
  display: block;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(57, 255, 20, 0.2); }
  70% { box-shadow: 0 0 0 10px rgba(57, 255, 20, 0); }
  100% { box-shadow: 0 0 0 0 rgba(57, 255, 20, 0); }
}

.art-text {
  font-size: 36px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #ff6034 50%, #ee0a24 100%);
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
  letter-spacing: 1px;
  filter: drop-shadow(0 2px 8px rgba(255, 96, 52, 0.3));
}

.sub-text {
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.section-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #fff;
  padding-left: 12px;
  position: relative;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 16px;
  background: linear-gradient(to bottom, #ff6034, #ee0a24);
  border-radius: 2px;
}

/* Animations */
.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
