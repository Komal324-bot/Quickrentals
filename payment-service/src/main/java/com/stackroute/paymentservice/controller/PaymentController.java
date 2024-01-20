package com.stackroute.paymentservice.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PaymentController {

    @Value("${rzp_key_id}")
    private String razorpayApiKey;

    @GetMapping("/payment")
    public String initiatePayment(Model model) throws RazorpayException {
        RazorpayClient razorpayClient = new RazorpayClient(razorpayApiKey, "lf8YGolhaKUHhPwdm3Ygcy3T");

        Order order;
        try {
            JSONObject orderRequest = new JSONObject();
            orderRequest.put("amount", 10000);
            orderRequest.put("currency", "INR");
            orderRequest.put("payment_capture", 1);

            order = razorpayClient.orders.create(orderRequest);
            model.addAttribute("orderId", order.get("id"));
            model.addAttribute("amount", order.get("amount"));
            model.addAttribute("currency", order.get("currency"));
            return "payment";
        } catch (RazorpayException e) {
            e.printStackTrace();
            return "error";
        }
    }
}
