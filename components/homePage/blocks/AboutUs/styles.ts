import styled from 'styled-components'

export const MainContainer = styled.div`
	padding: 0 0 125px;

	@media (max-width: 992px) {
		padding: 0 0 48px;
	}
`

export const ContentMainContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 95px;
	justify-content: space-between;
	@media (max-width: 1200px) {
		margin-top: 38px;
	}
`

export const MainPicture = styled.img`
	width: 650px;
	@media (max-width: 1300px) {
		width: 600px;
	}
	@media (max-width: 1200px) {
		display: none;
	}
`

export const ContentContainer = styled.div`
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 15px;
	padding-right: 150px;
	@media (max-width: 1400px) {
		padding-right: 100px;
	}
	@media (max-width: 1200px) {
		max-width: 100%;
		padding: 0;
	}
`

export const AboutUsButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.theme.orangeColor};
	font-size: 16px;
	padding: 15px 25px;
	cursor: pointer;
	user-select: none;
	margin-top: 50px;
	font-weight: 600;
	color: #fff;
	@media (max-width: 1200px) {
		margin: 30px auto;
	}
`

export const H2 = styled.h2`
	${props => props.theme.textOptions}
	${props => props.theme.h2}
	margin: 0;
	font-weight: 700;
	@media (max-width: 992px) {
		font-size: 20px !important;
	}
`

export const H3 = styled.h3`
	margin: 0;
	${props => props.theme.textOptions}
	${props => props.theme.h3}
	font-size: 30px;
	font-weight: 600;
	@media (max-width: 992px) {
		font-size: 18px !important;
	}
`

export const P = styled.p`
	${props => props.theme.textOptions}
	margin: 33px 0 0 0 !important;
	font-size: 22px;
	line-height: 33px;
	font-weight: 400px;
	opacity: 1;
	@media (max-width: 992px) {
		line-height: 21px;
		font-size: 15px;
		margin-top: 25px !important;
	}
`
