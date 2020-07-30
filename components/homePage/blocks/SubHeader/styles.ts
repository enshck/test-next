import styled from 'styled-components'

import { Container } from 'common/styles'

export const SubHeaderWrapper = styled.div`
	margin: -104px auto 0;
	width: fit-content;
	position: relative;
	display: flex;
	flex-direction: column;
	@media (max-width: 500px) {
		height: 450px;
		overflow: hidden;
	}
`
export const BackgroundImage = styled.img`
	max-width: 100%;
	position: static;
	@media (max-width: 500px) {
		height: 100%;
		transform: scaleX(2);
	}
`

export const BannerText = styled.h1`
	color: #fff;
	font-size: 90px !important;
	letter-spacing: 5px;
	line-height: 114px;
	font-weight: 700;
	text-transform: uppercase;
	margin-top: 0;
	@media (max-width: 1350px) {
		font-size: 60px !important;
		line-height: 90px;
	}
	@media (max-width: 1200px) {
		font-size: 35px !important;
		line-height: 40px;
		text-align: center;
	}
	@media (max-width: 768px) {
		font-size: 18px !important;
		line-height: 25px;
	}
	@media (max-width: 500px) {
		margin-bottom: 5px;
	}
`
export const TextContainer = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-51%);
	margin-top: 50px;
	width: 100%;
	@media (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (max-width: 500px) {
		z-index: 600;
		text-align: center;
	}
`

export const ButtonsContainer = styled.div`
	display: flex;
	@media (max-width: 1200px) {
		display: none;
	}
`

export const EmptyButton = styled.div`
	padding: 15px 25px;
	width: 270px;
	box-sizing: border-box;
	font-weight: 600;
	color: #fff;
	border: 3px solid ${props => props.theme.orangeColor};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 35px;
	font-size: 18px;
	max-height: 50px;
`

export const FullButton = styled(EmptyButton)`
	background-color: ${props => props.theme.orangeColor};
	margin: 0;
`

export const String = styled.div`
	color: #fff;
	margin-top: 40px;
	font-size: 25px;
	font-weight: 300;
	@media (max-width: 1200px) {
		font-size: 18px;
		order: 2;
		margin-top: 0;
	}
`

export const ShadowWrapContainer = styled.div`
	background: #000000;
	opacity: 0.4;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	@media (max-width: 500px) {
		z-index: 600;
	}
`

export const MainContainer = styled(Container)`
	width: 100%;
	box-sizing: border-box;
	margin: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 1201px) {
		box-sizing: none;
		align-items: flex-start;
		margin: 0 auto;
		margin-top: -100px;
	}
`

export const BlueRectagle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	max-width: 1040px;
	width: 100%;
	height: 100%;
	background: #32a4fc;
	opacity: 0.4;
	@media (max-width: 1400px) {
		max-width: 800px;
	}
	@media (max-width: 1200px) {
		padding-top: 20px;
		padding-bottom: 20px;
		height: 65px;
		top: 0;
		max-width: 100%;
	}
`

export const MobileButtonContainer = styled.div`
	display: none;
	@media (max-width: 1200px) {
		display: flex;
		order: 3;
		margin-top: 50px;
	}
	@media (max-width: 700px) {
		margin-top: 40px;
	}
`
