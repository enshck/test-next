import React from 'react'

import { ProfileMenuLink } from './styles'

interface IMenuLinkProps {
	title: string;
	to: string;
	setOpenedDrawer: (drawer: string) => void;
}

const MenuLink = ({ title, to, setOpenedDrawer }: IMenuLinkProps) => {
	return (
		<ProfileMenuLink to={to} onClick={() => setOpenedDrawer('')}>
			{title}
		</ProfileMenuLink>
	)
}

export default MenuLink
