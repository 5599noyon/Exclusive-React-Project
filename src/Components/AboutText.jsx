import React, { useState } from "react";

export default function AboutText() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-[525px] pt-[40px]">
      <p>
        Launched in 2015, Exclusive is South Asia’s premier online shopping
        marketplace with an active presence in Bangladesh. Supported by a wide
        range of tailored marketing, data and service solutions, Exclusive has
        10,500 sellers and 300 brands and serves 3 million customers across the
        region.
      </p>

      <p className="pt-[24px]">
        Exclusive has more than 1 million products to offer, growing very fast.
        Exclusive offers a diverse assortment in categories ranging from consumer.
        {!showMore ? (
          <button
            onClick={() => setShowMore(true)}
            className="ml-2 text-blue-600 hover:underline"
          >
            More...
          </button>
        ) : (
          <span
            onClick={() => setShowMore(false)}
            className="block mt-2 cursor-pointer hover:text-black"
          >
            Backed by advanced marketing and service solutions, the company
            connects over 10,500 sellers and 300 brands to more than 3 million
            customers. With an expanding catalog of over 1 million products.
          </span>
        )}
      </p>
    </div>
  );
}
