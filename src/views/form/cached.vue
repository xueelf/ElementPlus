<script setup lang="ts">
  import { useForm } from 'element-hooks';
  import { ElCheckboxGroup, ElInput } from 'element-plus';

  definePage({
    meta: {
      title: '缓存表单',
      keepAlive: true,
    },
  });

  const [Form] = useForm({
    labelWidth: '80px',
    model: {
      name: '',
      email: '',
      phone: '',
      subscribe: [],
      remark: '',
    },
    items: [
      {
        label: '姓名',
        prop: 'name',
        render: { component: ElInput, props: { placeholder: '请输入姓名' } },
      },
      {
        label: '邮箱',
        prop: 'email',
        render: { component: ElInput, props: { placeholder: '请输入邮箱' } },
      },
      {
        label: '电话',
        prop: 'phone',
        render: { component: ElInput, props: { placeholder: '请输入电话' } },
      },
      {
        label: '订阅',
        prop: 'subscribe',
        render: {
          component: ElCheckboxGroup,
          props: {
            options: [
              { label: '邮件通知', value: 'email' },
              { label: '短信通知', value: 'sms' },
              { label: '站内消息', value: 'inbox' },
            ],
          },
        },
      },
      {
        label: '备注',
        prop: 'remark',
        render: {
          component: ElInput,
          props: { type: 'textarea', placeholder: '请输入备注', rows: 3 },
        },
      },
    ],
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
      <Form />
    </ElCard>
  </div>
</template>

<style scoped lang="scss"></style>
