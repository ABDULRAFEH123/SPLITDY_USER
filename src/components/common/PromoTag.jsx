
export default function PromoTag({ promo }) {
  return (
    <div>
      <div className="bg-[#FF6E00] rounded absolute top-4 left-3">
        <p className="p-[6px] px-4 font-semibold text-white ">{promo}</p>
      </div>
    </div>
  )
}
