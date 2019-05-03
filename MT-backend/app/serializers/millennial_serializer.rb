class MillennialSerializer < ActiveModel::Serializer
  attributes :id, :user, :name, :thirst, :gender
  belongs_to :user


end
