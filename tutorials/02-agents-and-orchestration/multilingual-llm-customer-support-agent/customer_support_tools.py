"""
Customer Support Tools for Multilingual Agent
Tools that can be used by the watsonx Orchestrate agent
"""

from ibm_watsonx_orchestrate.agent_builder.tools import tool
from typing import Dict, List, Any
from datetime import datetime, timedelta
import random


# Simulated database for demonstration purposes
ORDERS_DB: Dict[str, Dict] = {
    "ORD-12345": {
        "status": "shipped",
        "tracking": "TRK-98765",
        "estimated_delivery": (datetime.now() + timedelta(days=2)).strftime("%Y-%m-%d"),
        "items": ["Laptop", "Mouse"],
        "total": 1299.99,
        "customer_email": "customer@example.com"
    },
    "ORD-67890": {
        "status": "processing",
        "tracking": None,
        "estimated_delivery": (datetime.now() + timedelta(days=5)).strftime("%Y-%m-%d"),
        "items": ["Headphones"],
        "total": 199.99,
        "customer_email": "customer@example.com"
    },
    "ORD-11111": {
        "status": "delivered",
        "tracking": "TRK-11111",
        "estimated_delivery": (datetime.now() - timedelta(days=3)).strftime("%Y-%m-%d"),
        "items": ["Keyboard", "Monitor"],
        "total": 599.99,
        "customer_email": "customer@example.com"
    }
}


@tool
def lookup_order_status(order_id: str) -> Dict[str, Any]:
    """Look up the status of a customer order.
    
    This tool retrieves detailed information about an order including its current
    status, tracking number, estimated delivery date, items, and total cost.
    
    Args:
        order_id (str): The order ID to look up (e.g., "ORD-12345")
        
    Returns:
        Dict[str, Any]: A dictionary containing order status information including
                       success status, order_id, and order data (status, tracking,
                       estimated_delivery, items, total)
    """
    if order_id in ORDERS_DB:
        return {
            "success": True,
            "order_id": order_id,
            "data": ORDERS_DB[order_id]
        }
    else:
        return {
            "success": False,
            "error": "Order not found",
            "order_id": order_id
        }


@tool
def submit_return_request(order_id: str, reason: str, items: List[str]) -> Dict[str, Any]:
    """Submit a return request for an order.
    
    This tool creates a return request for specified items from an order. It generates
    a return ID, provides a return label URL, and estimates the refund processing time.
    
    Args:
        order_id (str): The order ID to return items from
        reason (str): Reason for the return (e.g., "defective", "wrong item", "not as described")
        items (List[str]): List of item names to return
        
    Returns:
        Dict[str, Any]: A dictionary containing return request confirmation with return_id,
                       status, items, reason, estimated_refund_days, and return_label_url
    """
    if order_id in ORDERS_DB:
        return_id = f"RET-{random.randint(10000, 99999)}"
        return {
            "success": True,
            "return_id": return_id,
            "order_id": order_id,
            "status": "pending_approval",
            "items": items,
            "reason": reason,
            "estimated_refund_days": 7,
            "return_label_url": f"https://example.com/returns/{return_id}/label"
        }
    else:
        return {
            "success": False,
            "error": "Order not found"
        }


@tool
def escalate_to_human(issue_summary: str, customer_language: str, priority: str = "normal") -> Dict[str, Any]:
    """Escalate the conversation to a human agent.
    
    This tool creates a support ticket and transfers the customer to a human agent
    when the AI cannot resolve the issue. It provides estimated wait time and queue position.
    
    Args:
        issue_summary (str): Brief summary of the customer's issue
        customer_language (str): The language the customer is using (e.g., "en", "es", "fr")
        priority (str, optional): Priority level - "low", "normal", "high", or "urgent". Defaults to "normal".
        
    Returns:
        Dict[str, Any]: A dictionary containing escalation confirmation with ticket_id,
                       status, language, priority, estimated_wait_time, and queue_position
    """
    ticket_id = f"TKT-{random.randint(10000, 99999)}"
    
    # Estimate wait time based on priority
    wait_times = {
        "urgent": "2-5 minutes",
        "high": "5-10 minutes",
        "normal": "10-15 minutes",
        "low": "15-20 minutes"
    }
    
    return {
        "success": True,
        "ticket_id": ticket_id,
        "status": "escalated",
        "language": customer_language,
        "priority": priority,
        "estimated_wait_time": wait_times.get(priority, "10-15 minutes"),
        "issue_summary": issue_summary,
        "queue_position": random.randint(1, 10)
    }


@tool
def check_product_availability(product_id: str) -> Dict[str, Any]:
    """Check if a product is in stock.
    
    This tool checks the current inventory status of a product and provides
    stock quantity and estimated restock date if out of stock.
    
    Args:
        product_id (str): The product ID to check (e.g., "PROD-001")
        
    Returns:
        Dict[str, Any]: A dictionary containing product availability information including
                       product_id, name, in_stock status, quantity, and estimated_restock date
    """
    # Simulated product database
    products = {
        "PROD-001": {"name": "Laptop", "in_stock": True, "quantity": 15},
        "PROD-002": {"name": "Mouse", "in_stock": True, "quantity": 50},
        "PROD-003": {"name": "Keyboard", "in_stock": False, "quantity": 0},
        "PROD-004": {"name": "Monitor", "in_stock": True, "quantity": 8}
    }
    
    if product_id in products:
        product = products[product_id]
        return {
            "success": True,
            "product_id": product_id,
            "name": product["name"],
            "in_stock": product["in_stock"],
            "quantity": product["quantity"],
            "estimated_restock": None if product["in_stock"] else (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d")
        }
    else:
        return {
            "success": False,
            "error": "Product not found"
        }


@tool
def cancel_order(order_id: str, reason: str) -> Dict[str, Any]:
    """Cancel an order.
    
    This tool cancels an order that hasn't shipped yet and initiates a refund.
    Orders that have already shipped cannot be cancelled and must be returned instead.
    
    Args:
        order_id (str): The order ID to cancel
        reason (str): Reason for cancellation
        
    Returns:
        Dict[str, Any]: A dictionary containing cancellation confirmation with order_id,
                       status, reason, refund_amount, and estimated_refund_days
    """
    if order_id in ORDERS_DB:
        order = ORDERS_DB[order_id]
        
        # Can only cancel if order hasn't shipped yet
        if order["status"] == "processing":
            return {
                "success": True,
                "order_id": order_id,
                "status": "cancelled",
                "reason": reason,
                "refund_amount": order["total"],
                "estimated_refund_days": 5
            }
        else:
            return {
                "success": False,
                "error": f"Cannot cancel order. Order status: {order['status']}. Please submit a return request instead."
            }
    else:
        return {
            "success": False,
            "error": "Order not found"
        }


# Test the tools locally
if __name__ == "__main__":
    print("Testing Customer Support Tools\n" + "="*70)
    
    # Test order lookup
    print("\n1. Testing Order Lookup:")
    result = lookup_order_status(order_id="ORD-12345")
    content = result.content if hasattr(result, 'content') else result
    print(f"   Order Status: {content}")
    
    # Test return request
    print("\n2. Testing Return Request:")
    result = submit_return_request(
        order_id="ORD-12345",
        reason="Product defective",
        items=["Laptop"]
    )
    content = result.content if hasattr(result, 'content') else result
    print(f"   Return Request: {content}")
    
    # Test escalation
    print("\n3. Testing Escalation:")
    result = escalate_to_human(
        issue_summary="Order not received after 3 weeks",
        customer_language="en",
        priority="high"
    )
    content = result.content if hasattr(result, 'content') else result
    print(f"   Escalation: {content}")
    
    # Test product availability
    print("\n4. Testing Product Availability:")
    result = check_product_availability(product_id="PROD-001")
    content = result.content if hasattr(result, 'content') else result
    print(f"   Product Availability: {content}")
    
    # Test order cancellation
    print("\n5. Testing Order Cancellation:")
    result = cancel_order(order_id="ORD-67890", reason="Changed mind")
    content = result.content if hasattr(result, 'content') else result
    print(f"   Cancellation: {content}")
    
    print("\n" + "="*70)
    print("All tools tested successfully!")
