<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
			//white black
			let theme = this.$storage.getSync({key:'theme'});
			if(!theme){
				this.$storage.setSync({key: "theme", data: "white"});
			}
			// this.$mySocket.createSocket();
			
			
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
    @import "./static/style/common.css";
</style>
