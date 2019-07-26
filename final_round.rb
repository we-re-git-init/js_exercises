
# 1. Write a function that reverses a string. Don't use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

def reverse_a_string(string)
  reversed_string = ""
  index = string.length - 1

  while index >= 0
    reversed_string += string[index]
    index -= 1
  end

  reversed_string
end

puts reverse_a_string("motorboat") == "taobrotom"

# 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.

def count_as(string)
  string_array = string.split("")
  count = 0

  string_array.each do |letter|
    if letter == "a"
      count += 1
    end
  end

  count
end

puts count_as("banana") == 3

# 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there's a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!

def find_index(array, target)
  index = 0
  found_index = nil

  array.each do |element|
    if element == target
      found_index = index
    end
    index += 1
  end

  found_index
end

puts find_index([2, 5, 7, 14, 16], 7) == 2
puts find_index([2, 5, 7, 14, 16], 12) == nil

# 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!

def add_to_ordered_array(ordered_array, number)

  # finding the correct index to place the number
  placement_index = 0
  while ordered_array[placement_index] < number
    placement_index += 1
  end

  # moving the other elements out of the way
  index = ordered_array.length - 1
  while index >= placement_index
    ordered_array[index + 1] = ordered_array[index]
    index -= 1
  end

  # placing the number at the correct index
  ordered_array[placement_index] = number

  ordered_array
end

p add_to_ordered_array([1,2,4,12,42], 8)

# 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

def higher_or_lower(ordered_array, number)
  halfway_index = (ordered_array.length / 2).floor
  index = 0
  message = nil

  while index < ordered_array.length
    element = ordered_array[index]

    if element == number
      if index <= halfway_index
        message = "lower"
      else
        message = "higher"
      end
    end

    index += 1
  end

  return message
end

puts higher_or_lower([2, 7, 14, 16, 24], 7) == "lower"
puts higher_or_lower([2, 5, 7, 14, 16, 24], 7) == "lower"
puts higher_or_lower([2, 7, 14, 16, 24], 16) == "higher"
puts higher_or_lower([2, 5, 7, 14, 16, 24], 16) == "higher"
puts higher_or_lower([2, 5, 7, 14, 16, 24], 12) == nil

