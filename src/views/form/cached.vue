<script setup lang="ts">
  definePage({
    meta: {
      title: '缓存表单',
      keepAlive: true,
    },
  });

  const form = reactive({
    name: '',
    email: '',
    phone: '',
    subscribe: [],
    remark: '',
  });
</script>

<template>
  <div class="form-cached">
    <ElCard shadow="never">
      <template #header>
        <div class="flex items-center justify-between">
          <span>缓存表单</span>
          <ElTag type="success" size="small">KeepAlive</ElTag>
        </div>
      </template>
      <div class="mb-4">
        <ElAlert type="success" :closable="false">
          此页面已开启 KeepAlive 缓存。填写内容后切换到其他页面再返回，表单数据将被保留。
        </ElAlert>
      </div>
      <ElForm :model="form" label-width="80px">
        <ElFormItem label="姓名">
          <ElInput v-model="form.name" placeholder="请输入姓名" />
        </ElFormItem>
        <ElFormItem label="邮箱">
          <ElInput v-model="form.email" placeholder="请输入邮箱" />
        </ElFormItem>
        <ElFormItem label="电话">
          <ElInput v-model="form.phone" placeholder="请输入电话" />
        </ElFormItem>
        <ElFormItem label="订阅">
          <ElCheckboxGroup v-model="form.subscribe">
            <ElCheckbox label="邮件通知" value="email" />
            <ElCheckbox label="短信通知" value="sms" />
            <ElCheckbox label="站内消息" value="inbox" />
          </ElCheckboxGroup>
        </ElFormItem>
        <ElFormItem label="备注">
          <ElInput v-model="form.remark" type="textarea" placeholder="请输入备注" :rows="3" />
        </ElFormItem>
      </ElForm>
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
