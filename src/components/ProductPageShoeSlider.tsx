interface shoeCardProps {
  imgURL: string;
  changeBigShoeImage: (bigShoe: string) => void;
  bigShoeImg: string;
}

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
}: shoeCardProps) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL[0]) {
      changeBigShoeImage(bigShoeImg);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-center bg-cover p-1 sm:w-24 sm:h-24 rounded-xl max-sm:p-4">
        <img
          src={imgURL}
          alt="shoe colletion"
          // width={107}
          // height={183.34}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
