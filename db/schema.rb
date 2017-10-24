# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171024214708) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "available_times", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "time_avl", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_available_times_on_user_id"
  end

  create_table "hired_tutors", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "tutor_id", null: false
    t.integer "subject_id", null: false
    t.date "date", null: false
    t.integer "time_period", null: false
    t.integer "rate", null: false
    t.boolean "completed", default: false, null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_hired_tutors_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "body", null: false
    t.boolean "positive", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_subjects_on_title"
  end

  create_table "tutors_for_hires", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "subject_id", null: false
    t.integer "num_completed", default: 0, null: false
    t.integer "level", null: false
    t.integer "rate", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "zipcode", null: false
    t.string "password_digest", null: false
    t.string "phone_num", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
