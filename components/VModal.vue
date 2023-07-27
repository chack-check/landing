<script setup lang="ts"></script>

<template>

</template>

<style>
.modal {
  .el-dialog {
    --el-dialog-bg-color: var(--c-white);
    --el-dialog-width: 100%;
    --el-dialog-border-radius: 10px;

    max-inline-size: var(--width-md);

    .el-dialog__close {
      font-size: 24px;
      color: var(--c-dark-gray-700);

      @media (width >= 640px) {
        font-size: 32px;
      }
    }

    .el-dialog__headerbtn {
      position: static;

      inline-size: 24px;
      block-size: 24px;

      @media (width >= 640px) {
        inline-size: 32px;
        block-size: 32px;
      }
    }

    .el-dialog__title {
      display: none;
    }

    .el-dialog__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0;

      &:before {
        content: url('/assets/icons/logo.svg');
        display: block;
        inline-size: 24px;
        block-size: 24px;

        @media (width >= 640px) {
          inline-size: 32px;
          block-size: 32px;
        }
      }
    }
  }

  &.dark {
    .el-dialog {
      --el-dialog-bg-color: var(--c-dark-gray-600);
    }
  }
}
</style>
