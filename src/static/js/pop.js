export const popFuc={
    togglePopup(type, open,that) {
        switch (type) {
            case 'top':
                that.content = '顶部弹出 popup'
                break

            case 'bottom':
                that.content = '底部弹出 popup'
                break
            case 'center':
                that.content = '居中弹出 popup'
                break
        }
        that.type = type
        that.$nextTick(() => {
            that.$refs['show' + open].open()
        })
    },
    cancel(type,that) {
        that.$refs['show' + type].close()
    },
}
