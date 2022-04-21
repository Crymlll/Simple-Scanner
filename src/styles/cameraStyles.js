import { StyleSheet } from "react-native"

const cameraStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	header: {
		height: "10%",
		width: "100%",
		backgroundColor: "white",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	headerNav: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "5%",
	},
	textHeader: {
		fontSize: 20,
		textAlign: "center",
		marginLeft: "5%",
		fontWeight: "bold",
	},
	barcodeBox: {
		alignItems: "center",
		justifyContent: "center",
		height: "80%",
		width: "100%",
		overflow: "hidden",
	},
	Icon: {
		borderWidth: 1,
		borderColor: "rgba(0,0,0,0.2)",
		alignItems: "center",
		justifyContent: "center",
		width: 50,
		position: "absolute",
		bottom: 10,
		right: 10,
		height: 50,
		backgroundColor: "#fff",
		borderRadius: 100,
	},
	bottom: {
		flexDirection: "row",
		height: "10%",
		width: "100%",
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center",
	},
	textBarcode: {
		marginLeft: "5%",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(0,0,0,0.5)",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 10,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "80%",
	},
	button: {
		borderRadius: 10,
		padding: 10,
		elevation: 2,
		width: "100%",
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	Image: {
		resizeMode: "contain",
		height: 300,
		marginBottom: 20,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
})

export default cameraStyles
