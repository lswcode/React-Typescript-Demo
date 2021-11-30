interface Goods {
  title: string;
  id: number;
  price: number;
}
export const Template: React.FC<Goods> = ({ title, id, price }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{id}</div>
      <div>{price}</div>
    </div>
  );
};
