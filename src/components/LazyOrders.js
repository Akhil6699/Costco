import React from "react"
const Placeholder = () => null
const LazyOrders = props => {
  const [Component, setComponent] = React.useState(() => Placeholder)
  React.useEffect(() => {
    import("./orders.js").then(Order => setComponent(() => Order.default))
  }, [])
  return <Component {...props} />
}
export default LazyOrders