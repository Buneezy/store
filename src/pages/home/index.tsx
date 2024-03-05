import React, { useState } from "react";
import { ProductList } from "../../components/product";
import { Layout, Button } from "antd";
import { CreateItemModal } from "../../components/modal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { productActions } from "../../redux/product/reducer";
import { Product } from "../../types/product";
import { SortSelect } from "../../components/select";

const { Content, Header } = Layout;
export const HomePage: React.FC = () => {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
	const dispatch = useDispatch<AppDispatch>();

	const handleSubmit = (value: Product) => {
		dispatch(
			productActions.createProduct({
				product: {
					...value,
					imageUrl:
						"https://content.rozetka.com.ua/goods/images/original/144249988.jpg",
					comments: [],
				},
			}),
		);
	};

	const openCreateModal = () => {
		setIsCreateModalOpen(true);
	};

	const closeCreateModal = () => {
		setIsCreateModalOpen(false);
	};

	return (
		<div>
			<Layout>
				<Header
					style={{
						height: "10vh",
						backgroundColor: "black",
					}}
				>
					<Button type="primary" htmlType="submit" onClick={openCreateModal}>
						Create
					</Button>
					<SortSelect />
				</Header>
				<Content style={{ padding: "48px", height: "100%" }}>
					<ProductList />
				</Content>
			</Layout>
			{isCreateModalOpen && (
				<CreateItemModal
					visible={isCreateModalOpen}
					onClose={closeCreateModal}
					onSubmit={handleSubmit}
				/>
			)}
		</div>
	);
};
