import json
import csv
import os
print(os.getcwd())


def receive_json(file):
    return json.load(file)


def count_categories(books):
    categories = {}
    for book in books:
        for category in book['categories']:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("/home/alessandra/trybe/trybe-exercicios/"
              "4-ciencia-da-computacao/Python/dia2/books.json") as file:
        books = receive_json(file)

    # count by category
    book_count_by_category = count_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("/home/alessandra/trybe/trybe-exercicios/"
              "4-ciencia-da-computacao/Python/dia2/report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
