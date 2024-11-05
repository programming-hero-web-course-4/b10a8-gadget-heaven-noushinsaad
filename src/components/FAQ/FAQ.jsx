import { Helmet } from "react-helmet";

const FAQ = () => {
    return (
        <div className="bg-gray-50">
            <Helmet>
                <title>FAQ - Gadget Heaven</title>
            </Helmet>

            <div className="text-center bg-purple-600 p-6 text-white">
                <h1 className="md:w-3/4 mx-auto text-3xl md:text-4xl  lg:text-6xl font-bold">Common Questions</h1>
                <p className="py-6 md:w-1/3 mx-auto">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            <div className="w-full my-6 p-6 space-y-4">
                <h1 className="text-3xl font-bold">Orders & Shipping</h1>
                <div className="join join-vertical gap-6">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How can I track my order?</div>
                        <div className="collapse-content">
                            <p className="opacity-70 text-lg">
                                Once your order is shipped, you will receive a confirmation email with a tracking link.
                                Click on the link to view the latest status of your package.
                                You can also track your order directly on our website by entering your order number on the Order Tracking page.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How long does shipping take?</div>
                        <div className="collapse-content">
                            <p className="opacity-70 text-lg">
                                Shipping times vary depending on your location and the shipping option you selected at checkout.
                                Generally, orders are processed within 1-2 business days.
                                Standard shipping typically takes 5-7 business days, while expedited options can arrive within 2-3 business days.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Can I change my shipping address after placing an order?</div>
                        <div className="collapse-content">
                            <p className="opacity-70 text-lg">
                                We try to process orders as quickly as possible, so changes to the shipping address may not always be possible after the order is placed.
                                If you need to change the address, please contact our customer support team immediately, and we’ll do our best to assist you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full my-6 p-6 space-y-4">
                <h1 className="text-3xl font-bold">Returns & Refunds</h1>
                <div className="join join-vertical gap-6">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">How do I return an item?</div>
                        <div className="collapse-content">
                            <p className="opacity-70 text-lg">
                                To return an item, please visit our Returns page, where you can initiate the return process by entering your order details.
                                Once the return is authorized, you’ll receive instructions on how to ship the item back to us.
                                Make sure to follow the guidelines on packaging and shipping.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">How long does it take to process a refund?</div>
                        <div className="collapse-content">
                            <p className="opacity-70 text-lg">
                                Once we receive and inspect your returned item, your refund will be processed within 5-7 business days.
                                The refunded amount will be credited to your original payment method,
                                though it may take a few additional days for your bank to reflect the refund in your account.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">Will I get a full refund?</div>
                        <div className="collapse-content">
                            <p className="opacity-70 text-lg">
                                In most cases, you’ll receive a full refund for the returned item.
                                However, shipping fees are non-refundable unless the return is due to a defect or mistake on our part.
                                If your item is returned in used or damaged condition, a restocking fee may be deducted from your refund.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;