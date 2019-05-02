class UserSerializer < ActiveModel::Serializer

  has_many :millennials
  attributes :id, :username
  
end
