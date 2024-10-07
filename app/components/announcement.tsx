import styles from '../styles/announcement.module.css'
import React, { useState, useEffect } from 'react'
import volume from '../../public/icons/volume.svg'
import Image from 'next/image'

interface AnnouncementProps {
	title: string
	content: string
	icons: {
		download: {
			label: string
			icon: string
		}
		upload: {
			label: string
			icon: string
		}
		close: {
			label: string
			icon: string
		}
	}
}
const Announcement: React.FC<AnnouncementProps> = ({
	title,
	content,
	icons,
}) => {
	const [isClosed, setIsClosed] = useState(false)
	const [announcementUpdatedAt, setAnnouncementUpdatedAt] = useState('')

	useEffect(() => {
		if (localStorage.getItem('announcementLastUpdated') != content) {
			setAnnouncementUpdatedAt(content)
			setIsClosed(true)
			if (content == '') {
				setIsClosed(false)
			}
		}
	}, [content])

	const handleClose = () => {
		localStorage.setItem('announcementLastUpdated', announcementUpdatedAt)
		setIsClosed(false)
	}

	return (
		<div>
			{isClosed ? (
				<div className={styles.main}>
					<div className={styles.announcement}>
						<div className={styles.announcementIn}>
							<Image className={styles.iconSize} src={volume} alt='alt' />
							<h1 className={styles.heading}>{title}</h1>
						</div>
						<div className={styles.content}>
							<p className={styles.announcementText}>{content}</p>
							<div className={styles.announcementBtn}>
								<div className={styles.links}>
									<Image
										className={styles.iconSize}
										src={icons.download.icon}
										alt='alt'
										width={18}
										height={18}
									/>
									<p className={styles.paragraph}>{icons.download.label}</p>
								</div>
								<div className={styles.links}>
									<Image
										width={18}
										height={18}
										className={styles.iconSize}
										src={icons.upload.icon}
										alt='alt'
									/>
									<p className={styles.paragraph}>{icons.upload.label}</p>
								</div>
								<div className={styles.cancelIconInside} onClick={handleClose}>
									<Image
										width={18}
										height={18}
										className={styles.cancelBtn}
										src={icons.close.icon}
										alt='alt'
									/>
									<p className={styles.cancelBtnText}>{icons.close.label}</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.cancelIcon} onClick={handleClose}>
						<Image
							width={18}
							height={18}
							className={styles.cancelBtn}
							src={icons.close.icon}
							alt='alt'
						/>
						<p className={styles.cancelBtnText}>{icons.close.label}</p>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default Announcement
