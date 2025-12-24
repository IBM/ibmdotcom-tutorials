import unittest
from calculator import add, divide

# 1. Functions example
class TestFunctions(unittest.TestCase):
    def test_add_function(self):
        self.assertEqual(add(2, 3), 5)

    def test_divide_function(self):
        self.assertEqual(divide(10, 2), 5)
        with self.assertRaises(ValueError):
            divide(10, 0)

# 2. Testcase class example
class TestMath(unittest.TestCase):
    def test_basic(self):
        self.assertTrue(10 > 5)

# 3. Assertions examples
class TestAssertions(unittest.TestCase):
    def test_assertions(self):
        self.assertEqual(add(2, 2), 4)
        self.assertFalse(False)
        self.assertIn(3, [1, 2, 3])
        self.assertIs(None, None)
        with self.assertRaises(ValueError):
            divide(10, 0)

# 4. Test fixtures example
class TestUser(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.sample_data = {"name": "John", "age": 30}
    def test_name(self):
        self.assertEqual(self.sample_data["name"], "John")
    @classmethod
    def tearDownClass(cls):
        cls.sample_data = None

# 5. Test suite and runner example
class TestSuiteExample(unittest.TestCase):
    def test_add_suite(self):
        self.assertEqual(add(5, 5), 10)

def suite():
    suite = unittest.TestSuite()
    suite.addTest(TestFunctions("test_add_function"))
    suite.addTest(TestFunctions("test_divide_function"))
    suite.addTest(TestMath("test_basic"))
    suite.addTest(TestAssertions("test_assertions"))
    suite.addTest(TestUser("test_name"))
    suite.addTest(TestSuiteExample("test_add_suite"))
    return suite

if __name__ == "__main__":
    runner = unittest.TextTestRunner()
    runner.run(suite())



