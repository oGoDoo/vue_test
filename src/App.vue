<template>
    <div>
        <button>原生的按钮</button>
        <input type="text">
        <qsl-row>
            <qsl-button>默认按钮</qsl-button>
            <qsl-button type="primary">主要按钮</qsl-button>
            <qsl-button type="success">成功按钮</qsl-button>
            <qsl-button type="info">信息按钮</qsl-button>
            <qsl-button type="warning">警告按钮</qsl-button>
            <qsl-button type="danger">危险按钮</qsl-button>

            <qsl-date-picker type="date" placeholder="选择日期">
            </qsl-date-picker>
        </qsl-row>

        <qsl-row>
            <qsl-button icon="qsl-icon-search" circle></qsl-button>
            <qsl-button type="info" icon="qsl-icon-remove"></qsl-button>
            <qsl-button type="success" icon="qsl-icon-check" circle></qsl-button>
            <qsl-button type="info" icon="qsl-icon-message" circle></qsl-button>
            <qsl-button type="warning" icon="qsl-icon-star-off" circle></qsl-button>
            <qsl-button type="danger" icon="qsl-icon-dqslete" circle></qsl-button>
        </qsl-row>
    </div>
</template>

<script>

export default {
    name: 'App',
}
</script>  