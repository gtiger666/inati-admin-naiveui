<script lang="ts" setup>
import { useI18n } from '/@/composables/web/useI18n'
import { LoginStateEnum, useFormRules, useFormValid, useLoginState } from './useLogin'
import TheFormHeader from './TheFormHeader.vue'

const { t } = useI18n()
const { handleBackLogin, getLoginState } = useLoginState()
const { getFormRules } = useFormRules()

const formRef = ref()
const loading = ref(false)

const formData = reactive({
  mobile: '',
  smsCode: '',
})

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE)

async function handleLogin() {
  const { onSuccess } = useFormValid(formRef)!
  onSuccess(() => {
    console.log(formData, 'formData')
  })
}
</script>

<template>
  <template v-if="getShow">
    <!-- 表单头部 -->
    <TheFormHeader :title="t('sys.login.mobileSignInFormTitle')" @back="handleBackLogin" />
    <!-- 表单 -->
    <n-form ref="formRef" class="p-4" :show-label="false" :model="formData" :rules="getFormRules">
      <n-form-item label="mobile" path="mobile">
        <n-input v-model:value="formData.mobile" size="large" :placeholder="t('sys.login.mobile')" />
      </n-form-item>
      <n-form-item label="sms" path="sms">
        <CountdownInput
          v-model:value="formData.smsCode"
          size="large"
          :placeholder="t('sys.login.smsCode')"
        />
      </n-form-item>
      <n-grid x-gap="12" :cols="24">
        <n-gi span="24">
          <n-button type="primary" size="large" block :loading="loading" @click="handleLogin">
            {{ t('sys.login.loginButton') }}
          </n-button>
        </n-gi>
      </n-grid>
    </n-form>
  </template>
</template>
