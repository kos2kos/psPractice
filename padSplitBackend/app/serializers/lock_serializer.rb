class LockSerializer < ActiveModel::Serializer
  attributes :id, :house_id, :api_id, :locked
end
