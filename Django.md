## What is Django and what is its main purpose?

Django is a **Python-based** _web framework_ which runs on a web server. It follows the model–template–views architectural pattern.

Its main purpose is to ease the creation of complex, database-driven websites. Django emphasizes the reusability of components, rapid development, and the principle of don't repeat yourself.

It also provides an administrative mode for creating, reading, updating and deleting, configured via admin models.

## What is the difference between a view and a template in Django?

Django is based on the **Model-View-Template design** for a web application.

- **View:** A view is a Python function or class that takes a web request and returns a web response. Views access the data needed to satisfy requests through models and delegate formatting to the templates. In essence, a view processes the logic and interacts with the models to carry data to and from a database, and then passes that data to a template.

- **Template:** A template is a (text) file that creates the basic _boilerplate_ type structure/layout of the to-be-displayed output data (an HTML file), with some placeholders, which represent the (processed) data. It can be used for making dynamic HTML pages by replacing the placeholders with actual data.

## What is a model in Django and how is it used?

##### This completes the explanation of Django's Model-View-Template (MVT) architecture.

A model is the database storage system in Django (Like SQL). SQL (Structured Query Language) is complex and involves a lot of different queries for creating, deleting, updating, or any other stuff related to a database but Django models simplify the tasks by organizing tables into models.

A model in Django is in the form of a Python class. It has the fields and behaviors of the databeing stored. They are used for defining the data structure. They map to database tables and each attribute of the model represents a database field. Models make data creation, retrieval, update, and deletion operations easy for operation.

Models are defined in the `models.py` file of a Django app and are used like this:

```python
#!/usr/bin/env python

from django.db import models

class ExampleModel(models.Model):
    self.Field = models.CharField(max_length=100)
```

This model defines a simple table with a single field `Field`, which is a character field with a maximum length of 100 characters.
