import header from '../../components/common/header';
import record from '../../components/record/recordItem'

export default {
	components: {
		header,
		record
	},
	mounted() {
	    let theme = this.$storage.getSync({key:'theme'});
	    if(theme === 'white'){
			this.headerOptions={
				show: true,
				text: "USTU充币记录",
				isAllowReturn: true,
				fontfamily: "PingFangSC-Regular, PingFang SC",
				fontSize: '34',
				style: {
					color: "#333333",
				
				},
				isColor: true,
				rightItem: {
					type: "text",
					text: "ID:AVV491",
					style: {
						color: "#000000"
					}
				}
			}
		}else{
			this.headerOptions={
				show: true,
				text: "USTU充币记录",
				isAllowReturn: true,
				fontfamily: "PingFangSC-Regular, PingFang SC",
				fontSize: '34',
				background: '#00001A',
				style: {
					color: "#333333",
				
				},
				isColor: true,
				rightItem: {
					type: "text",
					text: "ID:AVV491",
					style: {
						color: "#000000"
					}
				}
			}
		}
	data() {
		return {
			showdata: false,
			nodata: true,
			headerOptions: {
				
			},
			recordData_list: [{
					titleName: "充币",
					number: "1798.1561657",
					status: "fail",
					date: "19:28 08/16"
				},
				{
					titleName: "提币",
					number: "1798.1561657",
					status: "success",
					date: "19:28 08/16"
				},
				{
					titleName: "提币",
					number: "1798.1561657",
					status: "inTheReview",
					date: "19:28 08/16"
				},
				{
					titleName: "充币",
					number: "1798.1561657",
					status: "fail",
					date: "19:28 08/16"
				},
				{
					titleName: "提币",
					number: "1798.1561657",
					status: "success",
					date: "19:28 08/16"
				},
				{
					titleName: "提币",
					number: "1798.1561657",
					status: "inTheReview",
					date: "19:28 08/16"
				},
			]
		}
	}
}
