import { useData } from "nextra/data";
import { FC } from "react";

import styles from "./index.module.css";

const LinkPreview: FC<{ keyObj: string }> = ({ keyObj }) => {
	const data = useData();
	if (!data || !data[keyObj]) return <></>;

	const { description, favicon, image, title, url } = data[keyObj];
	return (
		<div className={styles.container}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<div className={styles.info}>
					<div className={styles.title}>{title}</div>
					<div className={styles.description}>{description}</div>
					<div className={styles.footer}>
						<img className={styles.favicon} src={favicon} alt={title} />
						<div className={styles.url}>{url}</div>
					</div>
				</div>
				{image && (
					<div className={styles.image}>
						<img src={image} alt={title} loading="lazy" />
					</div>
				)}
			</a>
		</div>
	);
};

export default LinkPreview;
