<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    :placeholder-style="placeholderStyle"
    :placeholder-class="placeholderClass"
    :disabled="disabled"
    :maxlength="maxlength"
    :auto-focus="autoFocus"
    :focus="focus"
    :auto-height="autoHeight"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
    @linechange="handleLineChange"
    @confirm="handleConfirm"
    @keyboardheightchange="handleKeyboardHeightChange"
  />
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  placeholderStyle: {
    type: String,
    default: ''
  },
  /**
   * 该属性对应的 class 需要在页面级别或者全局中定义，否则不生效
   */
  placeholderClass: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type:Number,
    default: 140
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  focus: {
    type: Boolean,
    default: false
  },
  autoHeight: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  },
  cursorSpacing: {
    type: Number,
    default: 0
  },
  cursor: {
    type: Number,
    default: -1
  },
  showConfirmBar: {
    type: Boolean,
    default: true
  },
  selectionStart: {
    type: Number,
    default: -1
  },
  selectionEnd: {
    type: Number,
    default: -1
  },
  adjustPosition: {
    type: Boolean,
    default: true
  },
  holdKeyboard: {
    type: Boolean,
    default: false,
  },
  disableDefaultPadding: {
    type: Boolean,
    default: false
  },
  confirmType: {
    type: String,
    default: 'return',
  },
  confirmHold: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'linechange', 'confirm', 'keyboardheightchange'])

const handleInput = (e) => {
  emit('update:modelValue', e.detail.value)
  emit('input', e)
}

const handleFocus = (e) => {
  emit('focus', e)
}

const handleBlur = (e) => {
  emit('blur', e)
}

const handleLineChange = (e) => {
  emit('linechange', e)
}

const handleConfirm = (e) => {
  emit('confirm', e)
}

const handleKeyboardHeightChange = (e) => {
  emit('keyboardheightchange', e)
}
</script>
