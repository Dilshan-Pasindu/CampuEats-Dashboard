import { useState } from "react";
import "./OrderPage.css";

function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};
    if (v.name.trim().length < 2) e.name = "Name too short";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email))
      e.email = "Enter a valid email";
    if (Number(v.qty) < 1) e.qty = "Qty must be ≥ 1";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length === 0) setDone(true);
  }

  if (done) return (
    <div className="order-success">
      <span className="order-success-icon">🎉</span>
      <p className="order-success-title">Thanks, {form.name}!</p>
      <p className="order-success-sub">Order received. We'll have it ready for you soon.</p>
    </div>
  );

  return (
    <div className="order-page">
      <h2 className="order-heading">Place Your Order</h2>
      <p className="order-subheading">Fill in the details below and we'll get it ready for you.</p>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="order-field">
          <label className="order-label">Name</label>
          <input className={`order-input${errors.name ? " has-error" : ""}`} name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
          {errors.name && <span className="order-error">⚠ {errors.name}</span>}
        </div>
        <div className="order-field">
          <label className="order-label">Email</label>
          <input className={`order-input${errors.email ? " has-error" : ""}`} name="email" value={form.email} onChange={handleChange} placeholder="you@campus.edu" />
          {errors.email && <span className="order-error">⚠ {errors.email}</span>}
        </div>
        <div className="order-field">
          <label className="order-label">Quantity</label>
          <input
            className={`order-input${errors.qty ? " has-error" : ""}`}
            name="qty"
            type="number"
            value={form.qty}
            onChange={handleChange}
          />
          {errors.qty && <span className="order-error">⚠ {errors.qty}</span>}
        </div>
        <button className="order-submit" type="submit">Place Order →</button>
      </form>
    </div>
  );
}

export default OrderPage;
