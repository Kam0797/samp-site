import IconServer from "../../assets/icon-server.svg?react"
import "./Products.css"

export default function Products() {

  const productsData = [
    {
      title: "e-Taco",
      icon: "icon.svg",
      description: "- Hyper-resilient 8Ghz 7-Core tacos\n- Perfect for every task"
    },
    {
      title: "e-Nut",
      icon: "icon.svg",
      description: "- Efficiency at core - Roasts with just 4W power\n- Power in your pocket"
    },
    {
      title: "Warp-stik",
      icon: "icon.svg",
      description: "- Best-in-class server stick\n- Run servers on the go!"
    },
    {
      title: "Wierdx",
      icon: "icon.svg",
      description: "- Modular Linux distro\n- Optimised for wierder hardware, but runs anywhere"
    }
  ]
  return(
    <>
    <div className="section-title products-title">Products</div>
    <div className="products-wrapper">
      {
          productsData.map((product,index) => (
            <div className="product-div" key={index}>
              <div className="product-title-icon-wrap">
                <div className="product-title">{product.title}</div>
                <IconServer />
              </div>
              <div className="product-description">{product.description}</div>
            </div>
          )
        )
      }
    </div>
    </>
  )
}
