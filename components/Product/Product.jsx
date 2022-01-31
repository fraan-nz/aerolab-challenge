import React, { useState } from "react";
import Image from "next/image";
import { StyledProduct } from "./StyledProduct";
import Button from "../Button/Button";
import { TextDefaultL1, TextCapsL2 } from "../Text/StyledText";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useUser } from "../../hooks/useUser";
import redeemItem from "../../services/redeemItem";
import { successToast, errorToast } from "../Toast/Toast";

const currencyARS = Intl.NumberFormat("es-AR", {
	style: "decimal",
	currency: "ARS",
});

function Product({ name, category, cost, img, _id }) {
	const isBreakpoint = useMediaQuery(1024);
	const { points, setPoints, loading, setLoading } = useUser();
	const [loadingBtn, setLoadingBtn] = useState(false);

	const handleBuy = () => {
		if (points < cost) {
			return;
		} else {
			setLoadingBtn(true);
			setLoading(true);
			redeemItem(_id)
				.then((response) => {
					setPoints((prev) => prev - cost);
					setLoading(false);
					setLoadingBtn(false);
					if (response.status === 200) {
						successToast(name);
					}
				})
				.catch(() => {
					errorToast();
					setLoading(false);
				});
		}
	};

	return (
		<StyledProduct>
			<div className="product__image">
				<Image
					src={isBreakpoint ? img.url : img.hdUrl}
					alt={name}
					width={348}
					height={344}
					priority
					objectFit="contain"
					objectPosition="center"
				></Image>
			</div>
			<div className="product__title">
				<TextDefaultL1 color="black">{name}</TextDefaultL1>
				<TextCapsL2>{category}</TextCapsL2>
			</div>

			{(() => {
				if (loading && loadingBtn) {
					return (
						<Button size="medium" bg="wait" aria-label="Button loading">
							<TextDefaultL1>Processing...</TextDefaultL1>
						</Button>
					);
				} else if (points >= cost) {
					return (
						<Button
							size="medium"
							bg="gradient"
							onClick={handleBuy}
							aria-label={`Redeem ${name} for ${cost}`}
						>
							<TextDefaultL1 className="button__hover">
								Redeem now
							</TextDefaultL1>
							<div className="button__data">
								<TextDefaultL1>Redeem for</TextDefaultL1>
								<Image
									src="/assets/icons/aeropay-3.svg"
									width={24}
									height={24}
									alt="aerolab pay"
								/>
								<TextDefaultL1>{currencyARS.format(cost)}</TextDefaultL1>
							</div>
						</Button>
					);
				} else if (points < cost) {
					return (
						<Button
							size="medium"
							bg="disable"
							onClick={handleBuy}
							aria-label={`You need ${cost - points} for redeem ${name}`}
						>
							<TextDefaultL1 className="button__hover">
								Need {currencyARS.format(cost - points)}
							</TextDefaultL1>
							<div className="button__data disable">
								<TextDefaultL1>Redeem for</TextDefaultL1>
								<Image
									src="/assets/icons/aeropay-2.svg"
									width={24}
									height={24}
									alt="aerolab pay"
								/>
								<TextDefaultL1>{currencyARS.format(cost)}</TextDefaultL1>
							</div>
						</Button>
					);
				}
			})()}
		</StyledProduct>
	);
}

export default Product;
