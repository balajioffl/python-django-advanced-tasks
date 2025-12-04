from django.test import TestCase
from .models import Person
from django.urls import reverse

# Create your tests here.


# testing the person model

class PersonTest(TestCase):

    def test_full_name_method(self):
        person = Person.objects.create(first_name = 'vijay',last_name = 'joseph')
        self.assertEqual(person.full_name(),"vijay joseph")


# testing the home view

class HomeViewTest(TestCase):

    def test_home_page_code(self):
        
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)


    def test_home_page_view(self):
        
        response = self.client.get(reverse('home'))
        self.assertContains(response,"Welcome to the home page")