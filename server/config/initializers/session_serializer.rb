class SessionSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :token
end
