import styled from 'styled-components'

export const WhyUsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0 0 100px;
	margin-top: 45px;
	@media (max-width: 1150px) {
		padding: 0 0 0;
		img {
			width: 100px;
			height: 100px;
		}
	}
	@media (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
		img {
			width: 100px;
			height: 100px;
		}
	}
`

export const SingleBlock = styled.div`
	padding: 15px;
	img {
		margin: 0;
	}
	@media (max-width: 760px) {
		align-items: flex-start;
	}
	@media (max-width: 500px) {
		padding-left: 0;
	}
`

export const BlockHead = styled.h2`
	${props => props.theme.textOptions}
	${props => props.theme.h2}
	font-weight: 700;
	@media (max-width: 991px) {
		font-size: 20px !important;
	}
`

export const TextHead = styled.h3`
	${props => props.theme.textOptions}
	${props => props.theme.h3}
	font-size: 25px;
	font-weight: 600;
	margin: 40px 0 15px !important;
	@media (max-width: 1150px) {
		font-size: 18px !important;
		margin: 19px 0 !important;
	}
`

export const Text = styled.p`
	${props => props.theme.textOptions}
	max-width: 330px;
	font-size: 20px;
	line-height: 30px;
	opacity: 1;
	@media (max-width: 1150px) {
		text-align: left;
		line-height: initial;
		font-size: 15px;
	}
`
