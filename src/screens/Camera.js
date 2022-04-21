import React, { useState, useEffect } from "react"
import {
	View,
	Text,
	TouchableOpacity,
	Modal,
	Image,
	Pressable,
} from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import * as Linking from "expo-linking"
import * as Clipboard from "expo-clipboard"

import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

import cameraStyles from "../styles/cameraStyles"

const Camera = () => {
	const [hasPermission, setHasPermission] = useState(null),
		[modalVisible, setModalVisible] = useState(false),
		[scanned, setScanned] = useState(false),
		[scan, setScan] = useState(false),
		[type, setType] = useState(BarCodeScanner.Constants.Type.back),
		[X, setX] = useState(0),
		[Y, setY] = useState(0),
		[width, setWidth] = useState(0),
		[height, setHeight] = useState(0),
		[barcode, setBarcode] = useState("Waiting for scan...")

	const copyToClipboard = () => {
		Clipboard.setString(barcode)
		alert("Copied to clipboard")
	}

	useEffect(() => {
		;(async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync()
			setHasPermission(status === "granted")
		})()
	}, [])

	const handleSuccess = ({ bounds, data }) => {
		// setScanned(true)
		setScan(true)
		const { origin, size } = bounds
		setX(origin.x)
		setY(origin.y)
		setWidth(size.width)
		setHeight(size.height)
		setBarcode(data)
		console.log(data)
	}

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>
	}

	const handleClick = () => {
		Linking.canOpenURL(barcode).then((supported) => {
			if (supported) {
				Linking.openURL(barcode)
			} else {
				console.log("Data : " + barcode)
				// setBarcode("Result : " + barcode)
			}
		})
	}

	return (
		<View style={cameraStyles.container}>
			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.")
					setModalVisible(!modalVisible)
				}}
			>
				<Pressable
					style={cameraStyles.centeredView}
					onPress={() => setModalVisible(!modalVisible)}
				>
					<View style={cameraStyles.modalView}>
						<Text
							style={{
								fontWeight: "bold",
								marginBottom: 20,
								color: "#2196F3",
								fontSize: 20,
							}}
						>
							IDENTITAS MAHASISWA
						</Text>
						<Image
							style={cameraStyles.Image}
							source={require("../images/profile.png")}
						></Image>
						<Text style={{ fontWeight: "bold", color: "#000000" }}>
							Aulia Rahman Zulfi
						</Text>
						<Text style={{ fontWeight: "bold", color: "#000000" }}>
							119140110
						</Text>
						<Text
							style={{
								fontWeight: "bold",
								marginBottom: 30,
								color: "#000000",
							}}
						>
							Pengembangan Aplikasi Mobile - RD
						</Text>
						<Pressable
							style={[
								cameraStyles.button,
								cameraStyles.buttonClose,
								{ marginTop: 10 },
							]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={cameraStyles.textStyle}>Close</Text>
						</Pressable>
					</View>
				</Pressable>
			</Modal>
			<View style={cameraStyles.header}>
				<View style={cameraStyles.headerNav}>
					<TouchableOpacity
						onPress={(e) => {
							e.preventDefault()
							setModalVisible(true)
						}}
					>
						<Ionicons
							name="information-circle-outline"
							size={24}
							color="black"
							style={cameraStyles.IconHeader}
						/>
					</TouchableOpacity>

					<Text style={cameraStyles.textHeader}>Simple Scanner</Text>
				</View>
			</View>

			<View style={cameraStyles.barcodeBox}>
				<BarCodeScanner
					type={type}
					barCodeScannerSettings={{
						barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
					}}
					onBarCodeScanned={scanned ? undefined : handleSuccess}
					style={{ width: "100%", height: "100%" }}
				/>
				{scan === true ? (
					<View
						style={{
							position: "absolute",
							top: Y,
							left: X,
							width: width,
							height: height,
							borderColor: "red",
							borderWidth: 2,
						}}
					></View>
				) : (
					<View></View>
				)}
				<TouchableOpacity
					style={cameraStyles.Icon}
					onPress={() => {
						setType(
							type === BarCodeScanner.Constants.Type.back
								? BarCodeScanner.Constants.Type.front
								: BarCodeScanner.Constants.Type.back
						)
						console.log(type)
					}}
				>
					<MaterialIcons
						name="flip-camera-android"
						size={24}
						color="black"
						style={{ marginLeft: "10%" }}
					/>
				</TouchableOpacity>
			</View>
			<View style={cameraStyles.bottom}>
				{barcode != "Waiting for scan..." ? (
					<TouchableOpacity onPress={copyToClipboard}>
						<MaterialIcons
							name="content-copy"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				) : null}
				<TouchableOpacity
					onPress={handleClick()}
					style={cameraStyles.textBarcode}
				>
					<Text>{barcode}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Camera
