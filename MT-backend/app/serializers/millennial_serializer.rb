class MillennialSerializer < ActiveModel::Serializer

  belongs_to :user
  attributes :id, :user, :name, :thirst, :avatar
  
end
