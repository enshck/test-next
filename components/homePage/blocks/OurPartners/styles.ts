import styled from 'styled-components'

export const MainContainer = styled.div`
	padding-bottom: 125px;
	@media (max-width: 992px) {
		padding-bottom: 50px;
	}
`

export const PictureContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 100px;
	img {
		max-height: 50px;
		padding: 15px;
	}
	@media (max-width: 992px) {
		height: 125px;
		margin-top: 40px;
		img {
			height: 26px;
			padding: 5px;
		}
	}
`

export const H2 = styled.h2`
	${props => props.theme.textOptions}
	${props => props.theme.h2}
	margin: 0;
	@media (max-width: 992px) {
		font-size: 20px !important;
	}
`
